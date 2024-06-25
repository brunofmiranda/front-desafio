import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Relacionamento } from '../models/Relacionamento';
import { RelacionamentosService } from '../services/relacionamentos.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  confirmado:boolean = false;
  erro:boolean=false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Relacionamento, private relacionamentosService: RelacionamentosService) {}


  excluirRelacionamento(){
    this.relacionamentosService.excluir(this.data).subscribe((resposta) => {if (parseInt(resposta) == 1) {this.confirmado = true} else {this.erro = true}})
    
  }

  ngOnInit(): void {
  }

}
