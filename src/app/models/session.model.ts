export class Session {
  private id: number = -1;
  private roomId: number;
  private movieId: number;
  private horario: Date;

  constructor(roomId: number, movieId: number, horario: Date) {
    this.roomId = roomId;
    this.movieId = movieId;
    this.horario = horario;
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
    return this;
  }

  getRoomId() {
    return this.roomId;
  }

  getMovieId() {
    return this.movieId;
  }

  getHorario() {
    return this.horario;
  }
}
