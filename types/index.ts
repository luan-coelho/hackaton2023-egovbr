// EntityClass
abstract class EntityClass {
  id: number;
  // outros campos comuns
}

// Enum Perfil
enum Perfil {
  MASTER = "Default",
  GARCOM = "Admin",
  // outros valores
}

// Classe Postagem
class Postagem extends EntityClass {
  avaliacao?: Avaliacao | null;
  descricaoPostagem: string;
  tituloPostagem: string;
  urlImagem: string;
}

// Classe Avaliacao
class Avaliacao extends EntityClass {
  setor: Setor;
  perguntas: Pergunta[];
  titulo: string;
  descricao: string;
  concluida: boolean;
  emProcesso: boolean;
  sugestaoResultado: string;
  planoAcaoSetor: string;
  benfeitoriaReaizada: string;
}

// Classe Pergunta (Apenas um placeholder, já que não foi definida no código original)
class Pergunta extends EntityClass {
  // Defina os campos aqui
}

// Classe Setor
class Setor extends EntityClass {
  nome: string;
  usuarios: Usuario[];
}

// Classe Usuario
class Usuario extends EntityClass {
  nome: string;
  login: string;
  email: string;
  senha: string;
  cpf: string;
  perfis: Set<Perfil>;
}

// Classe Grupo
class Grupo extends EntityClass {
  nome: string;
  caminhoIcone: string;
  setores: Setor[];
}