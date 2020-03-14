import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasInheritanceComponent } from './canvas-inheritance.component';

describe('CanvasInheritanceComponent', () => {
  let component: CanvasInheritanceComponent;
  let fixture: ComponentFixture<CanvasInheritanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasInheritanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
