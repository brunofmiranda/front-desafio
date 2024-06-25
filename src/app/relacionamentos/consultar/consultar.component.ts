import { Component, OnInit } from '@angular/core';

import { Relacionamento } from '../models/Relacionamento';
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
    this.relacionamentosService.consultar(this.numProcesso).subscribe((relacionamentos) => {this.relacionamentos$ = relacionamentos.listaRelacionamentos})
    console.log(this.relacionamentos$)
  }


  excluir(subRelacionamentoResposta:subRelacionamentoResposta){

    let relacionamento = {
      numProcesso: this.numProcesso,
      numPessoa: subRelacionamentoResposta.numeroPessoa,
      codigo: subRelacionamentoResposta.codigoRelacionamento,
      dataInicio:subRelacionamentoResposta.dataInicio 
    }

    this.dialog.open(ExcluirComponent, {
      data: relacionamento
    });
  };

  ngOnInit(): void {
  }

}
