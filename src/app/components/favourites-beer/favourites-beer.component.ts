import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/BeerModels';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-favourites-beer',
  templateUrl: './favourites-beer.component.html',
  styleUrls: ['./favourites-beer.component.css'],
})
export class FavouritesBeerComponent implements OnInit {
  beers: Beer[] = [];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.getFavouriteBeers();
  }

  getFavouriteBeers() {
    this.beerService.getFavourites().subscribe(
      (data) => {
        console.log(data);
        this.beers = data;
        if (this.beers.length === 0) {
          alert('No favourite beers found!');
        }
      },
      (error) => {
        alert('An error has occurred while getting beers!');
        console.log(error);
      }
    );
  }

  removeFavourites(favBeerId: number) {
    this.beerService.removeFavourites(favBeerId).subscribe(
      (data) => {
        console.log(data);
        alert('Beer removed from favourites!');
        this.beers = this.beers.filter((beer) => beer.id !== favBeerId);
      },
      (error) => {
        alert('An error has occurred while removing beer from favourites!');
        console.log(error);
      }
    );
  }
}
