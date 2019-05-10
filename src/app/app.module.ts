import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { PokemonService } from "./API-services/pokemon.service";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PokecardComponent } from "./pokecard/pokecard.component";

@NgModule({
  declarations: [AppComponent, DashboardComponent, PokecardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
