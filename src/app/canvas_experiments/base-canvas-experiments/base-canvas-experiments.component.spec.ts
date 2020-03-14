import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCanvasExperimentsComponent } from './base-canvas-experiments.component';

describe('BaseCanvasExperimentsComponent', () => {
  let component: BaseCanvasExperimentsComponent;
  let fixture: ComponentFixture<BaseCanvasExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCanvasExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCanvasExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
