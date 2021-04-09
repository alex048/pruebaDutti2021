import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(module => module.RegisterModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
