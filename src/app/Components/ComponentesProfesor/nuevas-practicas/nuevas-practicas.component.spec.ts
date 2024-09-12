import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasPracticasComponent } from './nuevas-practicas.component';

describe('NuevasPracticasComponent', () => {
  let component: NuevasPracticasComponent;
  let fixture: ComponentFixture<NuevasPracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevasPracticasComponent]
    });
    fixture = TestBed.createComponent(NuevasPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
