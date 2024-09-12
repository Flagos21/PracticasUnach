import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstudianteComponent } from './home-estudiante.component';

describe('HomeEstudianteComponent', () => {
  let component: HomeEstudianteComponent;
  let fixture: ComponentFixture<HomeEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEstudianteComponent]
    });
    fixture = TestBed.createComponent(HomeEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
