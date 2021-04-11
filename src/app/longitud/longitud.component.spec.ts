import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongitudComponent } from './longitud.component';

describe('LongitudComponent', () => {
  let component: LongitudComponent;
  let fixture: ComponentFixture<LongitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
