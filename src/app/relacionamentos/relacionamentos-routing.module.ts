import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultarComponent } from './consultar/consultar.component';
import { CriarComponent } from './criar/criar.component';

const routes: Routes = [
  {path: '', component:ConsultarComponent},
  {path: 'consultar', component:ConsultarComponent},
  {path: 'criar', component:CriarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelacionamentosRoutingModule { }
