// src/app/models/ticket.model.ts

export class Ticket {
    private id: number;
    private sessionId: number;
    private clienteId: number;
    
    
    constructor(id: number, sessionId: number, clienteId: number) {
        this.id = id;
        this.sessionId = sessionId;
        this.clienteId = clienteId;
    }
  
    getId() {
      return this.id;
    }
  
    getSessionId() {
      return this.sessionId;
    }
  
    getClienteId() {
      return this.clienteId;
    }
}
  