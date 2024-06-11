import { Address } from "./address.model";

export class Customer {
  private id: number = -1;
  private endereco: Address | null;
  private primeiro_nome: string;
  private ultimo_nome: string;
  private email: string;
  private ativo: boolean;

  constructor(
    endereco: Address | null,
    primeiro_nome: string,
    ultimo_nome: string,
    email: string,
    ativo: boolean,
  ) {
    
    this.endereco = endereco;
    this.primeiro_nome = primeiro_nome;
    this.ultimo_nome = ultimo_nome;
    this.email = email;
    this.ativo = ativo;
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
    return this;
  }

  getEndereco() {
    return this.endereco;
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
