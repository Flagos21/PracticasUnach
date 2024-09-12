import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPracticaComponent } from './mi-practica.component';

describe('MiPracticaComponent', () => {
  let component: MiPracticaComponent;
  let fixture: ComponentFixture<MiPracticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiPracticaComponent]
    });
    fixture = TestBed.createComponent(MiPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
