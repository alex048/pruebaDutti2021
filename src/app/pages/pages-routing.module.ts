import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ships',
        loadChildren: () => import('./ships/ships.module').then(module => module.ShipsModule)
      },
      {
        path: 'pageOne',
        loadChildren: () => import('./page-one/one.module').then(module => module.OneModule)
      },

      {
        path: 'pageTwo',
        loadChildren: () => import('./page-two/two.module').then(module => module.TwoModule)
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
