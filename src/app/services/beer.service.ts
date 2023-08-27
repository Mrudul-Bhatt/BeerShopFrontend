import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private baseUrl =
    'https://localhost:7273/Beer/GetBeers?page=1&perPage=10&name=a';

  constructor(private httpClient: HttpClient) {}

  getBeers(page: number, perPage: number, name: string): Observable<any> {
    return this.httpClient.get<any>(
      'https://localhost:7273/Beer/GetBeers' +
        '?page=' +
        page +
        '&perPage=' +
        perPage +
        '&name=' +
        name
    );
  }

  addToFavourites(beer: any): Observable<any> {
    return this.httpClient.put<any>(
      'https://localhost:7273/Beer/AddToFavourite',
      beer
    );
  }

  removeFavourites(favBeerId: number) {
    return this.httpClient.delete<any>(
      'https://localhost:7273/Beer/RemoveFromFavourite' + '?id=' + favBeerId
    );
  }

  getFavourites(): Observable<any> {
    return this.httpClient.get<any>(
      'https://localhost:7273/Beer/GetFavoriteBeers'
    );
  }
}
