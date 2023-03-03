import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from '../../environments/environments.prod';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiKey = environment.apiKey;

    const authReq = req.clone({
      headers: req.headers.set('x-api-key', apiKey)
    });

    return next.handle(authReq);
  }
}