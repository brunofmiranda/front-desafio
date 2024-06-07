import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs/operators';
import { Relacionamento } from '../models/relacionamento';


@Injectable({
  providedIn: 'root'
})
export class RelacionamentosService {

  private readonly APIconsulta = '/assets/relacionamentos.json';
  private readonly APIlistaPessoas = '/assets/pessoas.json';

  constructor(private httpClient: HttpClient) { }

  consultar(){
    return this.httpClient.get<Relacionamento[]>(this.APIconsulta)
    .pipe(first(), delay(1500));}

  listarPessoasDisponiveis(numProcesso:number){
    return this.httpClient.get<number[]>(this.APIlistaPessoas).pipe(first(), delay(1500));
  }

  excluir(numPessoa: number, numProcesso: number){
    return this.httpClient.delete(this.APIconsulta);
  }
}
