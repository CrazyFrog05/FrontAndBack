import { Component } from '@angular/core';
import { UiHeaderComponent } from '../ui-header/ui-header.component';
import { CatalogRepository } from '../../infrastructure/catalog.repository';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUserLoginDto } from '../../common/types';
import { Router } from '@angular/router';
import { CatalogService } from '../../infrastructure/catalog.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiHeaderComponent,
    InfrastructureModule,
  ],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(
    private readonly catalogService: CatalogService,
    private readonly repo: CatalogRepository,
    private router: Router
  ) {}
  handleSubmit() {
    console.log('handleSubmit', this.loginForm.valid, this.loginForm.value);
    if (!this.loginForm.valid) return;
    const user = this.loginForm.value as IUserLoginDto;
    this.repo.loginUser(user).subscribe((res) => {
      if (res) {
        this.router.navigateByUrl('/profile');
      }
    });
  }

  handleLogin(event: MouseEvent) {
    event.preventDefault();
    this.router.navigateByUrl('/register');
  }
}
