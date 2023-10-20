export type Alternativa = {
  id: number,
  descricao: string
}

export type Pergunta = {
  id: number,
  descricao: string
  alternativas: Alternativa[],
  resposta: string
}

export type Formulario = {
  id: number,
  descricao: string
  perguntas: Pergunta[]
}

export type Postagem = {}