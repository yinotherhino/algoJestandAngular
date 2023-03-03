const request = require("supertest");
const app = require("../app");

const BVN_VALIDATION_ENDPOINT = "/bv-service/svalidate/wrapper";

const dbServiceMock = {
  findOne: jest.fn()
}
jest.mock("../db", () => dbServiceMock);

describe("BVN Validation Service Tests", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Valid BVN in request payload", async () => {
    const requestBody = { bvn: "12345678901" };
    const response = await request(app)
      .post(BVN_VALIDATION_ENDPOINT)
      .send(requestBody)
      .set("Accept", "application/json");
    const { message, code, bvn, basicDetail, ImageDetail } = response.body;
    expect(message).toBe("Success");
    expect(code).toBe("200");

    expect(bvn).toBe("12345678901");
    expect(basicDetail).toBe(expect.any(String));
    expect(ImageDetail).toBe(expect.any(String));
    expect(basicDetail).not.toBe("");
    expect(ImageDetail).not.toBe("");
    expect(basicDetail).not.toBeNull();
    expect(ImageDetail).not.toBeNull();

    expect(db.findOne).toHaveBeenCalledTimes(1);
    expect(db.findOne).rejects.not.toBeTruthy();

  }, 5000);

  test("Empty BVN in request payload", async () => {
    const requestBody = { bvn: "" };
    const response = await request(app)
      .post(BVN_VALIDATION_ENDPOINT)
      .send(requestBody)
      .set("Accept", "application/json");
    expect(response.status).toBe(400);
    const { message, code } = response.body;

    expect(message).toBe(
      "One or more of your request parameters failed validation. Please retry"
    );
    expect(code).toBe("400");

    expect(db.findOne).toHaveBeenCalledTimes(0);
  }, 1000);

  test("Invalid BVN in request payload", async () => {
    const requestBody = { bvn: "99999999999" };
    const response = await request(app)
      .post(BVN_VALIDATION_ENDPOINT)
      .send(requestBody)
      .set("Accept", "application/json");
    expect(response.status).toBe(401);
    const { message, code, bvn } = response.body;

    expect(message).toBe("The searched BVN does not exist");
    expect(code).toBe("400");
    expect(bvn).toBe("99999999999");

    expect(db.findOne).toHaveBeenCalledTimes(1);
    expect(db.findOne).rejects.toBeTruthy();
  }, 1000);

  test("Invalid BVN (Less than 11 BVN digits) in request payload", async () => {
    const requestBody = { bvn: "123456789" };
    const response = await request(app)
      .post(BVN_VALIDATION_ENDPOINT)
      .send(requestBody)
      .set("Accept", "application/json");

    expect(response.status).toBe(401);
    const { message, code, bvn } = response.body;
    expect(response.status).toBe(402);

    expect(message).toBe("The searched BVN is invalid");
    expect(code).toBe("402");
    expect(bvn).toBe("123456789");

    expect(db.findOne).toHaveBeenCalledTimes(0);
  }, 1000);

  test("Invalid BVN (Contains non digits) in request payload", async () => {
    const requestBody = { bvn: "12345678A90" };
    const response = await request(app)
      .post(BVN_VALIDATION_ENDPOINT)
      .send(requestBody)
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    const { message, code, bvn } = response.body;
    expect(response.status).toBe(400);

    expect(message).toBe("The searched BVN is invalid");
    expect(code).toBe("402");
    expect(bvn).toBe("12345678A90");

    expect(db.findOne).toHaveBeenCalledTimes(0);
  }, 1000);

  test("Valid BVN in request payload with BasicDetail in response", async () => {
    const requestBody = { bvn: "12345678901" };
    const response = await request(app)
      .post(BVN_VALIDATION_ENDPOINT)
      .send(requestBody)
      .set("Accept", "application/json");
    expect(response.status).toBe(400);
    const { basicDetail } = response.body;

    expect(basicDetail).not.toBe("");
    expect(basicDetail).not.toBeNull();
    expect(basicDetail).toBe(expect.any(String));

    expect(db.findOne).toHaveBeenCalledTimes(1);
    expect(db.findOne).rejects.not.toBeTruthy();

  }, 5000);
});
