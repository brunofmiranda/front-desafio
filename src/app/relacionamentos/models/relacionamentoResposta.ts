export interface RelacionamentoResposta {
  quantidadeOcorrenciaRelacionamentos:number | null,
  indicadorContinuidadePesquisa:number | null,
  relacionamentos: subRelacionamentoResposta[]
}

export interface subRelacionamentoResposta {
  codigoRelacionamento:number,
  dataInicioRelacionamento:string,
  nomeRazaoSocial:string

}
