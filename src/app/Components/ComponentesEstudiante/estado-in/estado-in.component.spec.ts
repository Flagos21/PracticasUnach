import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoInComponent } from './estado-in.component';

describe('EstadoInComponent', () => {
  let component: EstadoInComponent;
  let fixture: ComponentFixture<EstadoInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoInComponent]
    });
    fixture = TestBed.createComponent(EstadoInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
