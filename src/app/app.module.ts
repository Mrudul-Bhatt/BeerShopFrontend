import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBeerComponent } from './components/search-beer/search-beer.component';
import { FavouritesBeerComponent } from './components/favourites-beer/favourites-beer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HttpRequestResponseInterceptor } from './interceptors/http-request-response.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    SearchBeerComponent,
    FavouritesBeerComponent,
    TruncateTextPipe,
    NavBarComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
