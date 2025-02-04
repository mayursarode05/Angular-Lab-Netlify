import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatComponentComponent } from './mat-component.component';

describe('MatComponentComponent', () => {
  let component: MatComponentComponent;
  let fixture: ComponentFixture<MatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
