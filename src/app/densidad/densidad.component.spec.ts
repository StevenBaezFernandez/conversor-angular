import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DensidadComponent } from './densidad.component';

describe('DensidadComponent', () => {
  let component: DensidadComponent;
  let fixture: ComponentFixture<DensidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DensidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DensidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
