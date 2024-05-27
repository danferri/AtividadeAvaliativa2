// src/app/models/room.model.ts

export class Room {
    private id: number;
    private nome: string;
    private capacidade: number;

    constructor(id: number, nome: string, capacidade: number){
        this.id = id;
        this.nome = nome;
        this.capacidade = capacidade;
    }
   
  
    getId() {
      return this.id;
    }
  
    getNome() {
      return this.nome;
    }
  
    getCapacidade() {
      return this.capacidade;
    }
}
  