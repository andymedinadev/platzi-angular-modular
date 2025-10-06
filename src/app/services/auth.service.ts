import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Auth } from 'src/app/models/auth.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = `${environment.API_URL}/auth`;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(email: string, password: string) {
    return this.http
      .post<Auth>(`${this.API_URL}/login`, { email, password })
      .pipe(
        tap((response) => this.tokenService.saveToken(response.access_token))
      );
  }

  getProfile() {
    return this.http.get<User>(`${this.API_URL}/profile`);
  }

  refreshToken(refreshToken: string) {
    return this.http.post(`${this.API_URL}/refresh-token`, refreshToken);
  }
}
