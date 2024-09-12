import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoInicialComponent } from './progreso-inicial.component';

describe('ProgresoInicialComponent', () => {
  let component: ProgresoInicialComponent;
  let fixture: ComponentFixture<ProgresoInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgresoInicialComponent]
    });
    fixture = TestBed.createComponent(ProgresoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
