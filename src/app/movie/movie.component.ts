import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
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
}
