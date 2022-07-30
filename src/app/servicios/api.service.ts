import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  id:number=1;
  componente:string="";
  url:string = "http://localhost:8080/ver/";
  urlPost:string = "http://localhost:8080/new/";
  urlDelete:string = "http://localhost:8080/delete/";

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
    return this.http.post<any>(this.urlPost+componente, objeto);
  }

  deleteFiles(fileName:string):Observable<any>{
    return this.http.get<any>(this.urlDelete+fileName);
  }

  deleteBd(componente:string, id:number){
    return this.http.delete<any>(this.urlDelete+componente+'/'+id);
  }

  obtenerId(idNumber:number){
    this.id=idNumber;
    console.log(this.id)
  }

  obtenerComponente(componente:string){
    this.componente=componente;
    console.log(this.componente);
  }
}
