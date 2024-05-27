// src/app/models/employee.model.ts

export class Employee {
    private id: number;
    private enderecoId: number;
    private pagamentoId: number;
    private primeiro_nome: string;
    private ultimo_nome: string;
    private email: string;
    private ativo: boolean;
    private senha: string;
  
    constructor(id: number, enderecoId: number, pagamentoId: number, primeiro_nome: string, ultimo_nome: string, email: string, 
      ativo: boolean,
      senha: string
    ) {
      this.id = id;
      this.enderecoId = enderecoId;
      this.pagamentoId = pagamentoId;
      this.primeiro_nome = primeiro_nome;
      this.ultimo_nome = ultimo_nome;
      this.email = email;
      this.ativo = ativo;
      this.senha = senha;
    }
      
    getId() {
      return this.id;
    }
  
    getEnderecoId() {
      return this.enderecoId;
    }
  
    getPagamentoId() {
      return this.pagamentoId;
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
  
    getSenha() {
      return this.senha;
    }
}
  