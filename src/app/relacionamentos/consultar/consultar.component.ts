import { Component, OnInit } from '@angular/core';

import { Relacionamento } from '../models/relacionamento';
import { RelacionamentosService } from '../services/relacionamentos.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../excluir/excluir.component';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {

  relacionamentos$: Observable<Relacionamento[]>;
  displayedColumns = ['numPessoa', 'numProcesso', 'codigo', 'dataInicio', 'delete'];
  numProcesso:number = 0;


  constructor(private relacionamentosService: RelacionamentosService,public dialog: MatDialog) {
    this.relacionamentos$ = this.relacionamentosService.consultar()
                            .pipe(catchError(error => {return of([])}));
  }

  excluir(relacionamento:Relacionamento){
    this.dialog.open(ExcluirComponent, {
      data: relacionamento
    });
  };

  ngOnInit(): void {
  }

}
