import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStocksComponent } from './show-stocks.component';

describe('ShowQuizesComponent', () => {
  let component: ShowStocksComponent;
  let fixture: ComponentFixture<ShowStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
