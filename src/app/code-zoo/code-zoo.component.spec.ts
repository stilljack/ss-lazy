import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeZooComponent } from './code-zoo.component';

describe('CodeZooComponent', () => {
  let component: CodeZooComponent;
  let fixture: ComponentFixture<CodeZooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeZooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
