import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnlessDirective } from './unless.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div *appUnless="condition">Test Unless</div>
    <button (click)="toggleCondition()">Toggle Condition</button>
  `,
  standalone: true,
  imports: [UnlessDirective]
})
class TestUnlessComponent {
  condition = true;

  toggleCondition() {
    this.condition = !this.condition;
  }
}

describe('UnlessDirective', () => {
  let fixture: ComponentFixture<TestUnlessComponent>;
  let component: TestUnlessComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestUnlessComponent] // Use the test component with the standalone directive imported
    });
    fixture = TestBed.createComponent(TestUnlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should conditionally render the element', () => {
    // Initial state: condition is true, element should not be rendered
    expect(fixture.debugElement.query(By.css('div'))).toBeNull();

    // Toggle condition to false, element should be rendered
    component.toggleCondition();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('div'))).not.toBeNull();

    // Toggle condition back to true, element should not be rendered again
    component.toggleCondition();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('div'))).toBeNull();
  });
});
