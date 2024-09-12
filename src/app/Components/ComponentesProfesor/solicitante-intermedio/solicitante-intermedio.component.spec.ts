import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteIntermedioComponent } from './solicitante-intermedio.component';

describe('SolicitanteIntermedioComponent', () => {
  let component: SolicitanteIntermedioComponent;
  let fixture: ComponentFixture<SolicitanteIntermedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitanteIntermedioComponent]
    });
    fixture = TestBed.createComponent(SolicitanteIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
