import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs/operators';
import { Relacionamento } from '../models/Relacionamento';
import { RelacionamentoResposta } from '../models/relacionamentoResposta';
import { PessoasNaoVinculadasProcesso } from '../models/PessoasNaoVinculadasProcesso';


@Injectable({
  providedIn: 'root'
})
export class RelacionamentosService {

  private readonly APIconsulta = 'http://localhost:8080';
  private readonly jsonHeader = {
    headers: new HttpHeaders({
        "Content-type": "application/json; charset=UTF-8",
    })
};

  constructor(private httpClient: HttpClient) { }

  consultar(numeroProcesso:number){

    var jsonBody = JSON.stringify({ "numeroProcesso": numeroProcesso });
    return this.httpClient.post<RelacionamentoResposta>(this.APIconsulta + '/op8737160v1', jsonBody, this.jsonHeader).pipe(first());
  }

  listarPessoasNaoVinculadas(numeroProcesso:number){
    var jsonBody = JSON.stringify({ "numeroProcesso": numeroProcesso });

    return this.httpClient.post<PessoasNaoVinculadasProcesso>(this.APIconsulta + '/Op8737566v1', jsonBody, this.jsonHeader).pipe(first());
  }

  excluir(relacionamento:Relacionamento){
    var jsonBody = JSON.stringify({ "numeroPessoa":             relacionamento.numPessoa,
                                    "numeroProcesso":           relacionamento.numProcesso,
                                    "codigoTipoRelacionamento": relacionamento.codigo
                                  });

    return this.httpClient.post<string>(this.APIconsulta + '/Op8737173v1', jsonBody, this.jsonHeader).pipe(first());
  }
}
