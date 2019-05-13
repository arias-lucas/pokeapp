import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { PokemonService } from "./API-services/pokemon.service";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PokecardComponent } from "./pokecard/pokecard.component";
import { PokemonDetailComponent } from "./pokemonDetail/pokemonDetail.component";

const appRoutes: Routes = [
  { path: "pokemon/:id", component: PokemonDetailComponent },
  { path: "", component: DashboardComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PokecardComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
