import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaInternaComponent } from './practica-interna.component';

describe('PracticaInternaComponent', () => {
  let component: PracticaInternaComponent;
  let fixture: ComponentFixture<PracticaInternaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticaInternaComponent]
    });
    fixture = TestBed.createComponent(PracticaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
