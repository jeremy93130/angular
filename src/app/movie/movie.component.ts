import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../movie-service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  constructor(private serviceMovie: MovieService) {}
  @Input()
  movie!: Movie;

  like() {
    if (this.movie.clicked) {
      this.movie.likes--;
      this.movie.clicked = false;
    } else {
      this.movie.likes++;
      this.movie.clicked = true;
    }
  }
  remove() {
     let index = this.serviceMovie.movies.findIndex(
       (film) => film.id === this.movie.id
     );
     if (index !== -1) {
       this.serviceMovie.movies.splice(index, 1);
     }
  }
}
