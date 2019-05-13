import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { PokemonService } from "../API-services/pokemon.service";

@Component({
  selector: "pokecard",
  templateUrl: "./pokecard.component.html",
  styleUrls: ["./pokecard.component.css"],
  providers: [PokemonService]
})
export class PokecardComponent {
  @Input() pokemon: object;
  @Input() index: number;

  constructor(private router: Router) {}

  onClick(pokemon) {
    this.router.navigateByUrl(`/pokemon/${pokemon.name}`);
  }

  getSprite(id) {
    return "";
    // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${++id}.png`;
  }
}
