export class Actor {
  private id: number;
  private primeiro_nome: string;
  private ultimo_nome: string;

  constructor(id: number, primeiro_nome: string, ultimo_nome: string) {
    this.id = id;
    this.primeiro_nome = primeiro_nome;
    this.ultimo_nome = ultimo_nome;
  }

  getId() {
    return this.id;
  }

  getPrimeiroNome() {
    return this.primeiro_nome;
  }

  getUltimoNome() {
    return this.ultimo_nome;
  }
}
