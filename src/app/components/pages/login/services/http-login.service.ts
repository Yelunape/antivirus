import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URLAPI = "http://localhost:8080/api/auth/authenticate"

@Injectable({providedIn: 'root'})
export class HttpLoginService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(correo:string, contrasena:string){
    const headers = {"Content-Type": "application/json"}
    const body = {correo,contrasena}
    return this.http.post(URLAPI, body, {headers})
  }
}
