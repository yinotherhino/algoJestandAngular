const axios = require('axios');

const BVN_VALIDATION_ENDPOINT = 'http://localhost:8080/bv-service/svalidate/wrapper';

describe('BVN Validation Service Tests', () => {
  
  test('Valid BVN in request payload', async () => {
    const requestBody = { "bvn": "12345678901" };
    const response = await axios.post(BVN_VALIDATION_ENDPOINT, requestBody);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('message', 'Success');
    expect(response.data).toHaveProperty('code', '00');
    expect(response.data).toHaveProperty('bvn', '12345678901');
    expect(response.data).toHaveProperty('basicDetail', expect.any(String));
    expect(response.data).toHaveProperty('frontImage', expect.any(String));
    expect(response.data).toHaveProperty('backImage', expect.any(String));
  }, 5000);

  test('Empty BVN in request payload', async () => {
    const requestBody = { "bvn": "" };
    const response = await axios.post(BVN_VALIDATION_ENDPOINT, requestBody);
    expect(response.status).toBe(400);
    expect(response.data).toHaveProperty('message', 'One or more of your request parameters failed validation. Please retry');
    expect(response.data).toHaveProperty('code', '400');
  }, 1000);

  test('Invalid BVN in request payload', async () => {
    const requestBody = { "bvn": "99999999999" };
    const response = await axios.post(BVN_VALIDATION_ENDPOINT, requestBody);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('message', 'The searched BVN does not exist');
    expect(response.data).toHaveProperty('code', '01');
    expect(response.data).toHaveProperty('bvn', '99999999999');
  }, 1000);

  test('Invalid BVN (Less than 11 BVN digits) in request payload', async () => {
    const requestBody = { "bvn": "123456789" };
    const response = await axios.post(BVN_VALIDATION_ENDPOINT, requestBody);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('message', 'The searched BVN is invalid');
    expect(response.data).toHaveProperty('code', '02');
    expect(response.data).toHaveProperty('bvn', '123456789');
  }, 1000);

  test('Invalid BVN (Contains non digits) in request payload', async () => {
    const requestBody = { "bvn": "12345678A90" };
    const response = await axios.post(BVN_VALIDATION_ENDPOINT, requestBody);
    expect(response.status).toBe(400);
    expect(response.data).toHaveProperty('message', 'The searched BVN is invalid');
    expect(response.data).toHaveProperty('code', '400');
    expect(response.data).toHaveProperty('bvn', '12345678A90');
  }, 1000);

  test('Valid BVN in request payload with BasicDetail in response', async () => {
    const requestBody = { "bvn": "12345678901" };
    const response = await axios.post(BVN_VALIDATION_ENDPOINT, requestBody);
    expect(response.status).toBe(200);
    expect(response.data.basicDetail).not.toBe('');
  }, 5000);

});