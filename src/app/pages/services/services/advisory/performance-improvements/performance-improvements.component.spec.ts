import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceImprovementsComponent } from './performance-improvements.component';

describe('PerformanceImprovementsComponent', () => {
  let component: PerformanceImprovementsComponent;
  let fixture: ComponentFixture<PerformanceImprovementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceImprovementsComponent]
    });
    fixture = TestBed.createComponent(PerformanceImprovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
