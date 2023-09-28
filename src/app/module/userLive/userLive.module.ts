// userLive.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { UserLiveComponent } from './userLive.component'; // Import the component
import { UserLiveComponent } from './userLive/userLive.component';
import { UserLiveRoutingModule } from './userLive-routing.module'; // Import the routing module

@NgModule({
  declarations: [UserLiveComponent],
  imports: [CommonModule, UserLiveRoutingModule],
})

export class UserLiveModule {}
