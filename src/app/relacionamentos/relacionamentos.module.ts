import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

import { ConsultarComponent } from './consultar/consultar.component';
import { RelacionamentosRoutingModule } from './relacionamentos-routing.module';
import { CriarComponent } from './criar/criar.component';
import { ExcluirComponent } from './excluir/excluir.component';



@NgModule({
  declarations: [
    ConsultarComponent,
    CriarComponent,
    ExcluirComponent,

  ],
  imports: [
    CommonModule,
    RelacionamentosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule

  ]
})
export class RelacionamentosModule { }
