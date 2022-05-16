import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private localStorage:LocalstorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenString= this.localStorage.get('token')
    if(tokenString){
      let tokenReq= request.clone({
        headers:request.headers.set('Authorization',`Bearer ${tokenString}`)
      })
      return next.handle(tokenReq)    }
    
    return next.handle(request);
  }
}
