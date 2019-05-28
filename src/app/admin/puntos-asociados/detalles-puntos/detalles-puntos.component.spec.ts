import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPuntosComponent } from './detalles-puntos.component';

describe('DetallesPuntosComponent', () => {
  let component: DetallesPuntosComponent;
  let fixture: ComponentFixture<DetallesPuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
