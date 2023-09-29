// userLive-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLiveComponent } from './userLive/userLive.component'; // Import the component

const routes: Routes = [
  {
    path: '',
    component: UserLiveComponent, // Use the component in the route
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule],
})
export class UserLiveRoutingModule {}
