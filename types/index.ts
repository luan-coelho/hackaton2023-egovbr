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

export type Avaliacao = {
  id: number,
  titulo: string,
  setor: Setor,
  descricao: string
  perguntas: Pergunta[]
}

export type Setor = {
  id: number,
  usuarios: Usuario[],
  titulo: string,
  grupo: Grupo
}

export type Grupo = {
  id: number,
  titulo: string,
  imagem: string
}

export type Usuario = {
  id: number,
  nome: string,
  email: string,
  senha: string
}

export type Postagem = {
  id: number,
  avaliacao?: Avaliacao,
  descricaoPostagem: string,
  tituloPostagem: string,
  urlImagem: string
}