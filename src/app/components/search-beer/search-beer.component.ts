import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/BeerModels';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-search-beer',
  templateUrl: './search-beer.component.html',
  styleUrls: ['./search-beer.component.css'],
})
export class SearchBeerComponent implements OnInit {
  beers: Beer[] = [];
  searchTerm: string = '';
  itemsPerPage = 10;
  currentPage = 1;

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {}

  searchBeer() {
    this.beers = [];
    this.currentPage = 1;
    this.getBeers();
  }

  getBeers(): void {
    this.beerService
      .getBeers(this.currentPage, this.itemsPerPage, this.searchTerm)
      .subscribe(
        (data) => {
          console.log(data);
          this.beers = data;
          if (this.beers.length === 0) {
            alert('No beers found!');
          }
        },
        (error) => {
          alert('An error has occurred while getting beers!');
          console.log(error);
        }
      );
  }

  nextPage() {
    this.currentPage++;
    this.getBeers();
  }

  prevPage() {
    this.currentPage--;
    this.getBeers();
  }

  addFavourites(favBeer: Beer) {
    this.beerService.addToFavourites(favBeer).subscribe(
      (data) => {
        console.log(data);
        favBeer.is_favourite = true;
        alert('Beer added to favourites!');
      },
      (error) => {
        alert('An error has occurred while adding beer to favourites!');
        console.log(error);
      }
    );
  }

  removeFavourites(favBeerId: number, beer: Beer) {
    this.beerService.removeFavourites(favBeerId).subscribe(
      (data) => {
        console.log(data);
        beer.is_favourite = false;
        alert('Beer removed from favourites!');
      },
      (error) => {
        alert('An error has occurred while removing beer from favourites!');
        console.log(error);
      }
    );
  }
}
