// src/app/models/session.model.ts

export class Session {
    private id: number;
    private roomId: number;
    private movieId: number;
    private horario: Date;
    
    constructor(id: number, roomId: number, movieId: number, horario: Date) {
        this.id = id;
        this.roomId = roomId;
        this.movieId = movieId;
        this.horario = horario;
    }
  
    getId() {
      return this.id;
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
  