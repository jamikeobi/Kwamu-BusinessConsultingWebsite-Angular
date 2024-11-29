import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxIncentivesComponent } from './tax-incentives.component';

describe('TaxIncentivesComponent', () => {
  let component: TaxIncentivesComponent;
  let fixture: ComponentFixture<TaxIncentivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxIncentivesComponent]
    });
    fixture = TestBed.createComponent(TaxIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
