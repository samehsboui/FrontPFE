import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PansComponent } from './pans.component';

describe('PansComponent', () => {
  let component: PansComponent;
  let fixture: ComponentFixture<PansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
