import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';

// const routes: Routes = [

//   { path: "", loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule) },

//   { path: 'login', loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule) },
//   { path: 'signup', loadChildren: () => import('./module/signup/signup.module').then(m => m.SignupModule) },

//   { path:'dashboard', loadChildren:()=>import('./module/dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[AuthGuard]},
//   { path:'', loadChildren:()=>import('./module/dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[AuthGuard]},

//   { path:'editprofile', loadChildren:()=>import('./module/editprofile/editprofile.module').then(m=>m.EditprofileModule),canActivate:[AuthGuard]},
//   { path:'userprofile', loadChildren:()=>import('./module/userprofile/userprofile.module').then(m=>m.UserprofileModule),canActivate:[AuthGuard]},

// ];
const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./module/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  //   canActivate: [AuthGuard],
  // },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./module/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./module/login/login.module').then((m) => m.LoginModule),
  // },
  {
    path: 'login',
    loadChildren: () =>
      import('./module/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./module/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'reset/:id',
    loadChildren: () =>
      import('./module/reset-password/reset-password.module').then((m) => m.ResetPasswordModule),
  },
  {
    path: 'forget-password',
    loadChildren: () =>
      import('./module/forget-password/forget-password.module').then((m) => m.ForgetPasswordModule ),
  },

  {
    path: 'onboading-kyc',
    loadChildren: () =>
      import('./module/onboardkyc/onboardkyc.module').then(
        (m) => m.OnboardkycModule
      ),
  },

  {
    path: 'user-profile',
    loadChildren: () =>
      import('./module/userprofile/userprofile.module').then(
        (m) => m.UserprofileModule
      ),
  },{
    path: 'uikit',
    loadChildren: () =>
      import('./ui-kit/ui-kit.module').then((m) => m.UiKitModule),
  },
  {
    path: 'confirmation-page', loadChildren: () => import('./module/confirmation-page/confirmation-page.module').then(m => m.ConfirmationPageModule) 
    
  },
  {
    path: 'depositeDetails',
    loadChildren: () =>
      import('./module/deposite/details.module').then(
        (m) => m.BankDetailModule
      ),
  },

   {
    path: '**', redirectTo: '/dashboard'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
