import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/ver/";
  urlPost:string = "http://localhost:8080/new/";

  constructor(private http:HttpClient) { }

  obtenerDatosPersonales(componente:string):Observable<any>
  {
    return this.http.get<any>(this.url+componente)
  }

  obtenerPorId(componente:string, id:number):Observable<any>
  {
    return this.http.get<any>(this.url+componente+"/"+id)
  }

  enviarDatos(componente:string, objeto:any):Observable<any>
  {
    console.log("pasa por aca")
    return this.http.post<any>(this.urlPost+componente, objeto);
  }

  id:number=1;

  obtenerId(idNumber:number){
    this.id=idNumber;
  }

}
