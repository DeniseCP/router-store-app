import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContainerComponent } from './test-container.component';

describe('TestContainerComponent', () => {
  let component: TestContainerComponent;
  let fixture: ComponentFixture<TestContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestContainerComponent]
    });
    fixture = TestBed.createComponent(TestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
