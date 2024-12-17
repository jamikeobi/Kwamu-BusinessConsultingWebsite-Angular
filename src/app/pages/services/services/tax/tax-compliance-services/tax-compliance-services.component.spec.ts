import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxComplianceServicesComponent } from './tax-compliance-services.component';

describe('TaxComplianceServicesComponent', () => {
  let component: TaxComplianceServicesComponent;
  let fixture: ComponentFixture<TaxComplianceServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxComplianceServicesComponent]
    });
    fixture = TestBed.createComponent(TaxComplianceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
