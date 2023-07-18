import { OnInit } from "@angular/core";
import { OnSameUrlNavigation } from "@angular/router";

export class Movie {
  constructor(
    public titre: string,
    public description: string,
    public urlImage: string,
    public likes: number,
    public clicked: boolean
  ) {}
}
