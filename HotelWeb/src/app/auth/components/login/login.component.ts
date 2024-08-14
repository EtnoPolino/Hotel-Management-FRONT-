import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { LoginRequestPayload } from './login-request.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginRequestPayload!: LoginRequestPayload;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.loginRequestPayload = {
      email: '',
      password: '',
    };
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required],
    });
  }

  submitForm() {
    this.loginRequestPayload.email = this.loginForm.get('email')?.value;
    this.loginRequestPayload.password = this.loginForm.get('password')?.value;
  }
}
