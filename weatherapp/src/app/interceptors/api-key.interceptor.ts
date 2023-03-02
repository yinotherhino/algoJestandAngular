import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from '../../environments/environments.prod';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiKey = encodeURIComponent(environment.apiKey);

    // Clone the request and append the API key to the headers
    const authReq = req.clone({
      headers: req.headers.set('x-api-key', apiKey)
    });

    // Pass on the modified request to the next interceptor or HttpClient
    return next.handle(authReq);
  }
}