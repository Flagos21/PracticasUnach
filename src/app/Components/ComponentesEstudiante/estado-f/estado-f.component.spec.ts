import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoFComponent } from './estado-f.component';

describe('EstadoFComponent', () => {
  let component: EstadoFComponent;
  let fixture: ComponentFixture<EstadoFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoFComponent]
    });
    fixture = TestBed.createComponent(EstadoFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
