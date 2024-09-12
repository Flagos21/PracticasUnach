import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteFinalComponent } from './solicitante-final.component';

describe('SolicitanteFinalComponent', () => {
  let component: SolicitanteFinalComponent;
  let fixture: ComponentFixture<SolicitanteFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitanteFinalComponent]
    });
    fixture = TestBed.createComponent(SolicitanteFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
