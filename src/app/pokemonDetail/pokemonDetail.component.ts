import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokemonService } from "../API-services/pokemon.service";

@Component({
  selector: "pokemon-detail",
  templateUrl: "./pokemonDetail.component.html",
  styleUrls: ["./pokemonDetail.component.css"],
  providers: [PokemonService]
})
export class PokemonDetailComponent {
  pokemon: {};
  pokemonId: string;

  constructor(pokemonService: PokemonService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.pokemonId = params.get("id");
    });
    pokemonService.getPokemonById(this.pokemonId).subscribe(data => {
      this.pokemon = data;
    });
  }
}
