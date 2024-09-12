import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPracticasComponent } from './gestionar-practicas.component';

describe('GestionarPracticasComponent', () => {
  let component: GestionarPracticasComponent;
  let fixture: ComponentFixture<GestionarPracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarPracticasComponent]
    });
    fixture = TestBed.createComponent(GestionarPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
