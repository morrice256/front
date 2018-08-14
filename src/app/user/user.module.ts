import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponentComponent } from './login-component/login-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserAuthServiceService } from '../service/user-auth-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponentComponent, 
    UserComponentComponent
  ], providers: [
    UserAuthServiceService
  ]
})
export class UserModule { }
