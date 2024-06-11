export class Address {
  private id: number;
  private rua: string;
  private numero: number;
  private cep: string;
  private telefone: string;
  private cidade: string;
  private bairro: string;

  constructor(
    id: number,
    rua: string,
    numero: number,
    cep: string,
    telefone: string,
    cidade: string,
    bairro: string
  ) {
    
    this.id = id;
    this.rua = rua;
    this.numero = numero;
    this.cep = cep;
    this.telefone = telefone;
    this.cidade = cidade;
    this.bairro = bairro;
  }

  getId() {
    return this.id;
  }

  getRua() {
    return this.rua;
  }

  getNumero() {
    return this.numero;
  }

  getCep() {
    return this.cep;
  }

  getTelefone() {
    return this.telefone;
  }

  getCidade() {
    return this.cidade;
  }

  getBairro() {
    return this.bairro;
  }
}
