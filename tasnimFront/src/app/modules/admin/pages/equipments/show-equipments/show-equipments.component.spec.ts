import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEquipmentsComponent } from './show-equipments.component';

describe('ShowTrainersComponent', () => {
  let component: ShowEquipmentsComponent;
  let fixture: ComponentFixture<ShowEquipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEquipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
