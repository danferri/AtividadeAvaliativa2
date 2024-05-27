// src/app/models/category.model.ts

export class Category {
    private id: number;
    private nome: string;
    private ultima_atualizacao: Date;
  
    constructor(id: number, nome: string, ultima_atualizacao: Date) {
      this.id = id;
      this.nome = nome;
      this.ultima_atualizacao = ultima_atualizacao;
    }
  
    // Métodos getter para acessar os atributos privados
    getId() {
      return this.id;
    }
  
    getNome() {
      return this.nome;
    }
  
    getUltimaAtualizacao() {
      return this.ultima_atualizacao;
    }
}
  