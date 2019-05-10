import { Component } from "@angular/core";

import { PokemonService } from "../API-services/pokemon.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [PokemonService]
})
export class DashboardComponent {
  pokemons: {};

  constructor(pokemonService: PokemonService) {
    pokemonService.getAllPokemons().subscribe(data => {
      this.pokemons = data["results"];
    });
  }
}
