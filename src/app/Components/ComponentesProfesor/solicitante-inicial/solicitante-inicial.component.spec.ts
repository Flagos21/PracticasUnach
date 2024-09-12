import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteInicialComponent } from './solicitante-inicial.component';

describe('SolicitanteInicialComponent', () => {
  let component: SolicitanteInicialComponent;
  let fixture: ComponentFixture<SolicitanteInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitanteInicialComponent]
    });
    fixture = TestBed.createComponent(SolicitanteInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
