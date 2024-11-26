import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { registerResponse, User } from 'src/interfaces/user.interface';

const URL = 'http://localhost:8080/api/auth/register'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http:HttpClient
  ) { }

  registerUser(user:User):Observable<registerResponse>{
    const headers= {'Content-Type': 'application/json'}
    const body=JSON.stringify(user)
    return this.http.post<registerResponse>(URL,body,{headers})
  }
}