import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPuntosComponent } from './modal-puntos.component';

describe('ModalPuntosComponent', () => {
  let component: ModalPuntosComponent;
  let fixture: ComponentFixture<ModalPuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
