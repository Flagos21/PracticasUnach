import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBitacoraComponent } from './ver-bitacora.component';

describe('VerBitacoraComponent', () => {
  let component: VerBitacoraComponent;
  let fixture: ComponentFixture<VerBitacoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBitacoraComponent]
    });
    fixture = TestBed.createComponent(VerBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
