import { Component, OnInit } from '@angular/core';
import { Relacionamento } from '../models/relacionamento';
import { RelacionamentosService } from '../services/relacionamentos.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Observable, of } from 'rxjs';
import { catchError, min } from 'rxjs/operators';
import { PessoasDisponiveis } from '../models/pessoasDisponiveis';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {

  relacionamento:Relacionamento = {
    numPessoa: 0,
    numProcesso: 0,
    codigo: 0,
    dataInicio: ''
  };
  pessoasDisponiveis: PessoasDisponiveis[];
  pessoasFiltradas: PessoasDisponiveis[] = [];

  listarPessoasDisponiveis() {
    this.pessoasFiltradas = this.pessoasDisponiveis.filter(pessoa => pessoa.numProcesso == this.relacionamento.numProcesso);



  }

  constructor(private relacionamentosService: RelacionamentosService) {
    this.pessoasDisponiveis = [ {numPessoa: 111, numProcesso: 222},
                                {numPessoa: 222, numProcesso: 222},
                                {numPessoa: 333, numProcesso: 111},
                                {numPessoa: 444, numProcesso: 111},
                                {numPessoa: 555, numProcesso: 333},
                                {numPessoa: 666, numProcesso: 333},
                                {numPessoa: 777, numProcesso: 444}
                              ]
  }

  ngOnInit(): void {
  }

}
