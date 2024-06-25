export interface RelacionamentoResposta {
  quantidadeOcorrenciaRelacionamentos:number | null,
  indicadorContinuidadePesquisa:number | null,
  listaRelacionamentos: subRelacionamentoResposta[]
}

export interface subRelacionamentoResposta {
  codigoRelacionamento:number,
  dataInicio:string,
  nomeRazaoSocial:string,
  numeroPessoa: number
}
