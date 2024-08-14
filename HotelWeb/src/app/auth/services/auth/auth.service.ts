import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterRequestPayload } from '../../components/register/Register-request.payload';
import { LoginRequestPayload } from '../../components/login/login-request.payload';
import { LoginResponse } from '../../components/login/login-response.payload';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(registerRequestPayload: RegisterRequestPayload): Observable<any> {
    return this.http.post(URL + 'api/auth/signup', registerRequestPayload, {
      responseType: 'text',
    });
  }

  login(LoginRequestPayload: LoginRequestPayload): Observable<any> {
    return this.http.post(URL + 'api/auth/login', LoginRequestPayload);
  }
}
