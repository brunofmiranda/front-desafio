import { Component, OnInit } from '@angular/core';
import { Relacionamento } from '../models/relacionamento';
import { RelacionamentosService } from '../services/relacionamentos.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Observable, of } from 'rxjs';
import { catchError, min } from 'rxjs/operators';
import { Pessoas } from '../models/PessoasNaoVinculadasProcesso';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {

  relacionamento = {
    numeroPessoa: 0,
    numProcesso: 0,
    codigo: 0,
    dataInicio: ''
  };
  listaPessoas: Pessoas[] = [];

  constructor(private relacionamentosService: RelacionamentosService) {}

  listarPessoasDisponiveis() {
    this.relacionamentosService.listarPessoasNaoVinculadas(this.relacionamento.numProcesso)
                               .subscribe((listaPessoas) => {this.listaPessoas = listaPessoas.listaPessoas})
}

  ngOnInit(): void {
  }

}
