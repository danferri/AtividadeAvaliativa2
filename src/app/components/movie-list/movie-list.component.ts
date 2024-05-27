// src/app/components/movie-list/movie-list.component.ts

import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    // Obtendo os filmes em cartaz quando o componente é inicializado
    this.tmdbService.getMovies().subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}

