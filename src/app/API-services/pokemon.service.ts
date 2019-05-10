import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  apiURL: string = "https://pokeapi.co/api/v2";

  constructor(private httpClient: HttpClient) {}

  getPokemonById(id: number) {
    return this.httpClient.get(`${this.apiURL}/pokemon/${id}`);
  }

  getAllPokemons() {
    return this.httpClient.get(`${this.apiURL}/pokemon`);
  }
}
