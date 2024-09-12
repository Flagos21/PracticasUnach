import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscribirPComponent } from './inscribir-p.component';
import {Component} from '@angular/core';
describe('InscribirPComponent', () => {
  let component: InscribirPComponent;
  let fixture: ComponentFixture<InscribirPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscribirPComponent]
    });
    fixture = TestBed.createComponent(InscribirPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

