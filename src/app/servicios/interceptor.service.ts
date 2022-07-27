import { JsonPipe } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticateService:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser=this.autenticateService.UsuarioAutenticado;
    if(currentUser && currentUser.token){
      req=req.clone({
        setHeaders:{
          Authorization:'Bearer '+currentUser.token
        }
      })
    }
    console.log("interceptor esta corriendo " + JSON.stringify(currentUser));
    return next.handle(req);
  }
}
