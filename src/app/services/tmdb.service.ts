// src/app/services/tmdb.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '7386e1c051b8956efcb7ee4d4734e9c3';

  constructor(private http: HttpClient) {}

  // Método para obter filmes em cartaz
  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}&language=pt-BR`);
  }

  // Método para obter detalhes de um filme específico
  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=pt-BR`);
  }
}
