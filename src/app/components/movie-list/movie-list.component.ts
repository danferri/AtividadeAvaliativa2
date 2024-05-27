import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {

    this.tmdbService.getMovies().subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}

