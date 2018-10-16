import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservPanComponent } from './reserv-pan.component';

describe('ReservPanComponent', () => {
  let component: ReservPanComponent;
  let fixture: ComponentFixture<ReservPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
