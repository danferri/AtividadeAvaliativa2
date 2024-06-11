export class Movie {
  private id: number;
  private titulo: string;
  private descricao: string;
  private ano_release: number;
  private duracao_aluguel: number;
  private taxa_aluguel: number;
  private duracao: number;
  private custo_reposicao: number;
  private avaliacao: number;
  private linguagemId: number;

  constructor(id: number,
    titulo: string,
    descricao: string,
    ano_release: number,
    duracao_aluguel: number,
    taxa_aluguel: number,
    duracao: number,
    custo_reposicao: number,
    avaliacao: number,
    linguagemId: number
  ) {

    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.ano_release = ano_release;
    this.duracao_aluguel = duracao_aluguel;
    this.taxa_aluguel = taxa_aluguel;
    this.duracao = duracao;
    this.custo_reposicao = custo_reposicao;
    this.avaliacao = avaliacao;
    this.linguagemId = linguagemId;
  }

  getId() {
    return this.id;
  }

  getTitulo() {
    return this.titulo;
  }

  getDescricao() {
    return this.descricao;
  }

  getAnoRelease() {
    return this.ano_release;
  }

  getDuracaoAluguel() {
    return this.duracao_aluguel;
  }

  getTaxaAluguel() {
    return this.taxa_aluguel;
  }

  getDuracao() {
    return this.duracao;
  }

  getCustoReposicao() {
    return this.custo_reposicao;
  }

  getAvaliacao() {
    return this.avaliacao;
  }

  getLinguagemId() {
    return this.linguagemId;
  }
}

