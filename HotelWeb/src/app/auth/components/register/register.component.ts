import { Component, OnInit } from '@angular/core';
import { RegisterRequestPayload } from './Register-request.payload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerRequestPayload!: RegisterRequestPayload;
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.registerRequestPayload = {
      name: '',
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
    });
  }

  submitForm() {
    this.registerRequestPayload.name = this.registerForm.get('name')?.value;
    this.registerRequestPayload.email = this.registerForm.get('email')?.value;
    this.registerRequestPayload.password =
      this.registerForm.get('password')?.value;

    this.authService.register(this.registerRequestPayload).subscribe({
      next: () => {
        this.message.success('Signup successful', { nzDuration: 3000 });
        this.router.navigateByUrl('/login');
      },
      error: () => {
        this.message.error('Registration failed! please try again');
      },
    });
  }
}
