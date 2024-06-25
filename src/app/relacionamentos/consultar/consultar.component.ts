import { Component, OnInit } from '@angular/core';

import { Relacionamento } from '../models/relacionamento';
import { RelacionamentosService } from '../services/relacionamentos.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../excluir/excluir.component';
import { RelacionamentoResposta, subRelacionamentoResposta } from '../models/relacionamentoResposta';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {

  relacionamentos$: subRelacionamentoResposta[] = [];
  displayedColumns = ['codigoRelacionamento', 'nomePesssoa', 'dataInicio', 'delete'];
  numProcesso:number = 0;


  constructor(private relacionamentosService: RelacionamentosService,public dialog: MatDialog) {}

  consultarRelacionamentos(){
    this.relacionamentosService.consultar(this.numProcesso).subscribe((relacionamentos) => {this.relacionamentos$ = relacionamentos.relacionamentos})
    console.log(this.relacionamentos$)
  }


  excluir(relacionamento:Relacionamento){
    this.dialog.open(ExcluirComponent, {
      data: relacionamento
    });
  };

  ngOnInit(): void {
  }

}
