import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoute2Component } from './test-route-2.component';

describe('TestRoute2Component', () => {
  let component: TestRoute2Component;
  let fixture: ComponentFixture<TestRoute2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestRoute2Component]
    });
    fixture = TestBed.createComponent(TestRoute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
