import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API = 'api/user';
  private userList: User[] = [];
  private userAuth: boolean = false;
  @Output() showMenuEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.httpClient
      .get<User[]>(this.API)
      .pipe(first())
      .subscribe((data) => {
        this.userList = data;
      });
  }

  public login(user: User) {
    this.userList.forEach((systemUSer) => {
      if (
        systemUSer.name === user.name &&
        systemUSer.password === user.password
      ) {
        this.showMenuEmitter.emit(true);
        sessionStorage.setItem('username', user.name);
        this.router.navigate(['inventory']);
      } else {
        this.showMenuEmitter.emit(false);
        this.onError();
      }
    });
  }

  private onError() {
    this._snackBar.open('Usuário ou senha incorretos.', 'OK', {
      duration: 5000,
    });
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
