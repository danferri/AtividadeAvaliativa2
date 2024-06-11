export class Room {
  private id: number = -1;
  private nome: string;
  private capacidade: number;

  constructor(nome: string, capacidade: number) {
    this.nome = nome;
    this.capacidade = capacidade;
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
    return this;
  }

  getNome() {
    return this.nome;
  }

  getCapacidade() {
    return this.capacidade;
  }
}
