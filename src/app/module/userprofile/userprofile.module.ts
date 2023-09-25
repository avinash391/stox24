import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared_module/shared/shared.module';

@NgModule({
  declarations: [
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserprofileModule { }
