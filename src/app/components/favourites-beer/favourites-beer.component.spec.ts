import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesBeerComponent } from './favourites-beer.component';

describe('FavouritesBeerComponent', () => {
  let component: FavouritesBeerComponent;
  let fixture: ComponentFixture<FavouritesBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesBeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
