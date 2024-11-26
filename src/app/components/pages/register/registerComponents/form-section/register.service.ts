import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { registerResponse, User } from 'src/interfaces/user.interface';

const URL = 'https://56j68jcs-8080.use2.devtunnels.ms/api/auth/register'

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
