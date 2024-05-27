// src/app/models/language.model.ts

export class Language {
    private id: number;
    private nome: string;
  
    constructor(id: number, nome: string) {
      this.id = id;
      this.nome = nome;
    }
      
    getId() {
      return this.id;
    }
  
    getNome() {
      return this.nome;
    }
}
  