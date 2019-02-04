import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteordersComponent } from './favouriteorders.component';

describe('FavouriteordersComponent', () => {
  let component: FavouriteordersComponent;
  let fixture: ComponentFixture<FavouriteordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
