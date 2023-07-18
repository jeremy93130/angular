import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies!: Movie[];

  constructor() {
    this.movies = [
      new Movie(
        'Oppenheimer',
        "Biopic sur Julius Robert Oppenheimer, brillant chercheur épris de culture et d'humanisme, connu pour avoir dirigé, aux États-Unis, la mise au point de la bombe atomique pendant la Seconde Guerre mondiale.",
        'https://cdn.paris.fr/qfapv4/2023/06/28/huge-624443039f79bdc110ffa7b36586fd72.jpg',
        0,
        false
      ),
      new Movie(
        'Titanic',
        'Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le Titanic appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgA13CwSXM1k2yx2WGeLVXksg03vzvSrRpr5ZvXrZRX2d6NPlb',
        26,
        false
      ),
      new Movie(
        'Interstellar',
        "Dans un proche futur, la Terre est devenue hostile pour l'homme. Les tempêtes de sable sont fréquentes et il n'y a plus que le maïs qui peut être cultivé, en raison d'un sol trop aride. Cooper est un pilote, recyclé en agriculteur, qui vit avec son fils et sa fille dans la ferme familiale. Lorsqu'une force qu'il ne peut expliquer lui indique les coordonnées d'une division secrète de la NASA, il est alors embarqué dans une expédition pour sauver l'humanité.",
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIVryzUKVaqs-5yb0-uHykg7Ob4rUWFl-Ojl28OvBExh8Xc8GT',
        88,
        false
      ),
      new Movie(
        'La Nonne',
        "Lorsqu'une jeune nonne se suicide dans une abbaye roumaine, la stupéfaction est totale dans l'Église catholique. Le Vatican missionne aussitôt un prêtre au passé trouble et une novice pour mener l'enquête. Risquant leur vie, les deux ecclésiastiques doivent affronter une force maléfique qui bouscule leur foi et menace de détruire leur âme. Bientôt, l'abbaye est en proie à une lutte sans merci entre les vivants et les damnés.",
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIwXsQHsCEcUx7S3Svbm9VRqo9cxOPRVhK8VuIn4KgcZA0jfnf',
        199,
        false
      ),
    ];
  }
}
