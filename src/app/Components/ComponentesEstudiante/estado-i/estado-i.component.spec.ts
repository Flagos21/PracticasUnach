import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoIComponent } from './estado-i.component';

describe('EstadoIComponent', () => {
  let component: EstadoIComponent;
  let fixture: ComponentFixture<EstadoIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoIComponent]
    });
    fixture = TestBed.createComponent(EstadoIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
