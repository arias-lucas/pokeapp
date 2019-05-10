import { Component, Input } from "@angular/core";

import { PokemonService } from "../API-services/pokemon.service";

@Component({
  selector: "pokecard",
  templateUrl: "./pokecard.component.html",
  styleUrls: ["./pokecard.component.css"],
  providers: [PokemonService]
})
export class PokecardComponent {
  @Input() pokemon: object;
}
