import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPanComponent } from './new-pan.component';

describe('NewPanComponent', () => {
  let component: NewPanComponent;
  let fixture: ComponentFixture<NewPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
