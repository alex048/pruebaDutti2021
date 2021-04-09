import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesComponent } from './components/pages.component';
// Components
//import { LoginComponent } from './auth/login/login.component';
//import { RegisterComponent } from './auth/register/register.component';

//const routes: Routes = [
//{ path: 'auth', loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule) },
//{ path: '', component: LoginComponent },
//{ path: 'register', component: RegisterComponent },
//{ path: 'principal', loadChildren: () => import(`./shared/principal/principal.module`).then(m => m.PrincipalModule) }
// { path: 'ships', loadChildren: () => import(`./components/ships/ships.module`).then(m => m.ShipsModule) }
//];

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: PagesComponent,
    children: [

      {
        path: 'pages',
        loadChildren: () => import('./components/pages.module').then(module => module.PagesModule)
      },

      // { path: 'default', component: DefaultComponent },
      //{ path: '', redirectTo: '/default', pathMatch: 'full' },
      //{ path: '**', component: NofoundComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
