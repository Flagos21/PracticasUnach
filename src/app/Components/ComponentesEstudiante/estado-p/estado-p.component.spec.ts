import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPComponent } from './estado-p.component';

describe('EstadoPComponent', () => {
  let component: EstadoPComponent;
  let fixture: ComponentFixture<EstadoPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoPComponent]
    });
    fixture = TestBed.createComponent(EstadoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
