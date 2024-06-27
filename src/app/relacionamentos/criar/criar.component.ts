import { Component, OnInit } from '@angular/core';
import { Relacionamento } from '../models/Relacionamento';
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

  relacionamento:Relacionamento ={ numPessoa: 0, numProcesso: 0, codigo: 0, dataInicio: ''};
  listaPessoas: Pessoas[] = [];
  relacionamentoCriado:Relacionamento = { numPessoa: 0, numProcesso: 0, codigo: 0, dataInicio: ''};
  criado:boolean = false;
  erroCriacao:boolean = false;

  constructor(private relacionamentosService: RelacionamentosService) {}

  listarPessoasDisponiveis() {
    this.relacionamentosService.listarPessoasNaoVinculadas(this.relacionamento.numProcesso)
                               .subscribe((listaPessoas) => {this.listaPessoas = listaPessoas.listaPessoas})
  }

  criar(){
    this.relacionamento.dataInicio = this.converterData(this.relacionamento.dataInicio)
    console.log(this.relacionamento.dataInicio)
    this.relacionamentosService.incluir(this.relacionamento).subscribe((resposta) => {this.relacionamentoCriado = resposta} );
    if (this.relacionamento = this.relacionamentoCriado) {
      this.criado = true;
      
    } else {
      this.erroCriacao = true;
      
    }

  }

  converterData(data: string): string {
    // Cria um objeto Date a partir da string de entrada
    let dataObj = new Date(data.replace(/-/g, '/'));

    // Extrai o dia, mês e ano
    let dia = dataObj.getDate();
    let mes = dataObj.getMonth() + 1; // getMonth() retorna um valor de 0-11, então adicionamos 1
    let ano = dataObj.getFullYear(); 

    // Converte o dia e o mês para strings e adiciona um '0' na frente se eles tiverem apenas um dígito
    let diaStr = dia < 10 ? '0' + dia : '' + dia;
    let mesStr = mes < 10 ? '0' + mes : '' + mes;

    // Retorna a data no formato dd/mm/yyyy
    return diaStr + '/' + mesStr + '/' + ano;
  }


  ngOnInit(): void {
  }

}
