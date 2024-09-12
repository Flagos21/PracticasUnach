import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoIntermedioComponent } from './progreso-intermedio.component';

describe('ProgresoIntermedioComponent', () => {
  let component: ProgresoIntermedioComponent;
  let fixture: ComponentFixture<ProgresoIntermedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgresoIntermedioComponent]
    });
    fixture = TestBed.createComponent(ProgresoIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
