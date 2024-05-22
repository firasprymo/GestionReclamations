import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReclamationsComponent } from './show-reclamations.component';

describe('ShowCoursesComponent', () => {
  let component: ShowReclamationsComponent;
  let fixture: ComponentFixture<ShowReclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReclamationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
