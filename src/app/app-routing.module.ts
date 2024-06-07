import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'relacionamentos'},
  {
    path: 'relacionamentos',
    loadChildren: () =>  import('./relacionamentos/relacionamentos.module')
                        .then(mod => mod.RelacionamentosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
