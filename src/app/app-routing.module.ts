import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBeerComponent } from './components/search-beer/search-beer.component';
import { FavouritesBeerComponent } from './components/favourites-beer/favourites-beer.component';

const routes: Routes = [
  { path: '', component: SearchBeerComponent },
  { path: 'favourites', component: FavouritesBeerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
