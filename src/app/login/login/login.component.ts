import { User } from 'src/app/model/user';
import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public hide = true;
  public titlePage: string = 'Login';
  public user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      password: [null],
    });
  }

  ngOnInit(): void {}

  public onSubmit() {
    console.log('Submit');
    this.authService.login(this.form.value);
  }
}
