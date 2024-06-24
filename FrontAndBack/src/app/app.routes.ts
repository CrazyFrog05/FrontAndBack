import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard], },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];
