import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaExternaComponent } from './practica-externa.component';

describe('PracticaExternaComponent', () => {
  let component: PracticaExternaComponent;
  let fixture: ComponentFixture<PracticaExternaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticaExternaComponent]
    });
    fixture = TestBed.createComponent(PracticaExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
