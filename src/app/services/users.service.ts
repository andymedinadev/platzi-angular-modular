import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { CreateUserDTO, UpdateUserDTO, User } from '@models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private readonly API_URL = `${environment.API_URL}/users/`;

  getAllUsers() {
    return this.http.get<User[]>(this.API_URL);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }

  create(data: CreateUserDTO) {
    return this.http.post<User>(`${this.API_URL}`, data);
  }

  update(id: number, changes: UpdateUserDTO) {
    return this.http.put<User>(`${this.API_URL}/${id}`, changes);
  }

  delete(id: number) {
    return this.http.delete<User>(`${this.API_URL}/${id}`);
  }
}
