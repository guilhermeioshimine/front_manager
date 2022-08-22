import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API = 'api/user';
  id!: Number;

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<User[]>(this.API).pipe(first());
  }

  save(user: User) {
    console.log(user);
    return this.httpClient.post<User>(this.API, user).pipe(first());
  }

  listById(userId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', userId);
    return this.httpClient
      .get<User>(this.API + '/ById', { params: queryParams })
      .pipe(first());
  }

  update(user: User) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', user.id);
    return this.httpClient
      .put<User>(this.API, user, { params: queryParams })
      .pipe(first());
  }

  delete(userId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', userId);
    return this.httpClient
      .delete<User>(this.API, { params: queryParams })
      .pipe(first());
  }
}
