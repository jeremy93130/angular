import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  titre!: string;
  description!: string;
  likes!: string;
  urlImage!: string;
  ngOnInit(): void {
    this.titre = 'Oppenheimer';
    this.description =
      "Biopic sur Julius Robert Oppenheimer, brillant chercheur épris de culture et d'humanisme, connu pour avoir dirigé, aux États-Unis, la mise au point de la bombe atomique pendant la Seconde Guerre mondiale.";
    this.likes = '27 likes';
    this.urlImage =
      'https://cdn.paris.fr/qfapv4/2023/06/28/huge-624443039f79bdc110ffa7b36586fd72.jpg';
  }
}
