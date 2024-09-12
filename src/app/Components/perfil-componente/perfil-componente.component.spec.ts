import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponenteComponent } from './perfil-componente.component';

describe('PerfilComponenteComponent', () => {
  let component: PerfilComponenteComponent;
  let fixture: ComponentFixture<PerfilComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilComponenteComponent]
    });
    fixture = TestBed.createComponent(PerfilComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
