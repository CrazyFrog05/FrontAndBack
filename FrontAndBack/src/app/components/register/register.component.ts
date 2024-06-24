import { Component } from '@angular/core';
import { UiHeaderComponent } from '../ui-header/ui-header.component';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUserRegisterDto } from '../../common/types';
import { Router } from '@angular/router';
import { CatalogService } from '../../infrastructure/catalog.service';
import { CatalogRepository } from '../../infrastructure/catalog.repository';
import { CatalogFacade } from '../../store/catalog.facade';
import { raceWith, take } from 'rxjs';
import { registerUserSuccess } from '../../store/catalog.actions';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiHeaderComponent,
    InfrastructureModule,
  ],
})
export class RegisterComponent {
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(
    private readonly repo: CatalogRepository,
    private readonly facade: CatalogFacade,
    private router: Router
  ) {}
  handleSubmit() {
    console.log(
      'handleSubmit',
      this.registrationForm.valid,
      this.registrationForm.value
    );
    if (!this.registrationForm.valid) {
      console.log("form not valid");
      return;
    }
    const user = this.registrationForm.value as IUserRegisterDto;

    this.facade.registerUserSuccess$.pipe(raceWith(this.facade.registerUserFailure$), take(1)).subscribe(
      res => {
        console.log(res);
        if (res.type === registerUserSuccess.type) {
          this.router.navigateByUrl('/profile');
        }
      }
    );
    this.repo.registerUser(user);
  }

  handleLogin(event: MouseEvent) {
    event.preventDefault();
    this.router.navigateByUrl('/login');
  }
}
