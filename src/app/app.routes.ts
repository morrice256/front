import { LoginComponentComponent } from "./user/login-component/login-component.component";
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponentComponent },
    { path: '**', redirectTo: 'login' }
  ];