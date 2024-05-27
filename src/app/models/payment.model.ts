// src/app/models/payment.model.ts

export class Payment {
    private id: number;
    private aluguelId: number;
    private funcionarioId: number;
    private valor: number;
    private data_pagamento: Date;
  
    constructor(id: number, aluguelId: number, funcionarioId: number, valor: number, data_pagamento: Date) {
      this.id = id;
      this.aluguelId = aluguelId;
      this.funcionarioId = funcionarioId;
      this.valor = valor;
      this.data_pagamento = data_pagamento;
    }
      
    getId() {
      return this.id;
    }
  
    getAluguelId() {
      return this.aluguelId;
    }
  
    getFuncionarioId() {
      return this.funcionarioId;
    }
  
    getValor() {
      return this.valor;
    }
  
    getDataPagamento() {
      return this.data_pagamento;
    }
  }
  