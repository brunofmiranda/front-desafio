export interface PessoasNaoVinculadasProcesso {
  quantidadeOcorrenciaListaPessoas: number |null,
  indicadorQuantidadePesquisa: number | null,
  listaPessoas:Pessoas[]
  
}

export interface Pessoas {
  numeroPessoa:number,
  nomeRazaoSocial:string
}
