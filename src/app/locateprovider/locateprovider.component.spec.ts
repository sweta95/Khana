import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateproviderComponent } from './locateprovider.component';

describe('LocateproviderComponent', () => {
  let component: LocateproviderComponent;
  let fixture: ComponentFixture<LocateproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
