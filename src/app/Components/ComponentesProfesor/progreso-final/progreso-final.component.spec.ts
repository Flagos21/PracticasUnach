import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoFinalComponent } from './progreso-final.component';

describe('ProgresoFinalComponent', () => {
  let component: ProgresoFinalComponent;
  let fixture: ComponentFixture<ProgresoFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgresoFinalComponent]
    });
    fixture = TestBed.createComponent(ProgresoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
