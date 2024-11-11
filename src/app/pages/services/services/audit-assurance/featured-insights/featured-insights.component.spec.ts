import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedInsightsComponent } from './featured-insights.component';

describe('FeaturedInsightsComponent', () => {
  let component: FeaturedInsightsComponent;
  let fixture: ComponentFixture<FeaturedInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedInsightsComponent]
    });
    fixture = TestBed.createComponent(FeaturedInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
