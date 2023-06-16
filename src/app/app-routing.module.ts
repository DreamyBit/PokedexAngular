import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
