import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarBitacoraComponent } from './ingresar-bitacora.component';

describe('IngresarBitacoraComponent', () => {
  let component: IngresarBitacoraComponent;
  let fixture: ComponentFixture<IngresarBitacoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarBitacoraComponent]
    });
    fixture = TestBed.createComponent(IngresarBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
