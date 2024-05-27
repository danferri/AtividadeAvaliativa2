export class Customer {
  private id: number;
  private enderecoId: number;
  private primeiro_nome: string;
  private ultimo_nome: string;
  private email: string;
  private ativo: boolean;

  constructor(
    id: number,
    enderecoId: number,
    primeiro_nome: string,
    ultimo_nome: string,
    email: string,
    ativo: boolean
  ) {
    this.id = id;
    this.enderecoId = enderecoId;
    this.primeiro_nome = primeiro_nome;
    this.ultimo_nome = ultimo_nome;
    this.email = email;
    this.ativo = ativo;
  }


  getId() {
    return this.id;
  }

  getEnderecoId() {
    return this.enderecoId;
  }

  getPrimeiroNome() {
    return this.primeiro_nome;
  }

  getUltimoNome() {
    return this.ultimo_nome;
  }

  getEmail() {
    return this.email;
  }

  getAtivo() {
    return this.ativo;
  }
}
