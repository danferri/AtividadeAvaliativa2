export class Rental {
  private id: number;
  private pagamentoId: number;
  private clienteId: number;
  private data_aluguel: Date;
  private data_retorno: Date;

  constructor(id: number, pagamentoId: number, clienteId: number, data_aluguel: Date, data_retorno: Date) {
    this.id = id;
    this.pagamentoId = pagamentoId;
    this.clienteId = clienteId;
    this.data_aluguel = data_aluguel;
    this.data_retorno = data_retorno;
  }

  getId() {
    return this.id;
  }

  getPagamentoId() {
    return this.pagamentoId;
  }

  getClienteId() {
    return this.clienteId;
  }

  getDataAluguel() {
    return this.data_aluguel;
  }

  getDataRetorno() {
    return this.data_retorno;
  }
}
