import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPanComponent } from './detail-pan.component';

describe('DetailPanComponent', () => {
  let component: DetailPanComponent;
  let fixture: ComponentFixture<DetailPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
