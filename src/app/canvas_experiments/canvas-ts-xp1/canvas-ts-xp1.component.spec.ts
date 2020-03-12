import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasTsXp1Component } from './canvas-ts-xp1.component';

describe('CanvasTsXp1Component', () => {
  let component: CanvasTsXp1Component;
  let fixture: ComponentFixture<CanvasTsXp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasTsXp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasTsXp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
