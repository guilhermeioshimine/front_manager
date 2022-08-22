import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
})
export class UserDeleteComponent implements OnInit {
  userId!: number;
  userName!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.data.id;
    this.userName = this.data.name;
  }

  public onDelete(id: number) {
    this.userService.delete(id).subscribe(
      (response) => {
        this.onSuccess();
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['user']);
          });
      },
      (error) => {
        this.onError();
      }
    );
  }

  private onError() {
    this._snackBar.open('Erro ao deletar Usuário.', 'OK', { duration: 5000 });
  }

  private onSuccess() {
    this._snackBar.open('Usuário deletado com sucesso.', 'OK', {
      duration: 5000,
    });
  }
}
