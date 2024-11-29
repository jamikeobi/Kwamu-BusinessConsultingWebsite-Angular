import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherComplianceComponent } from './other-compliance.component';

describe('OtherComplianceComponent', () => {
  let component: OtherComplianceComponent;
  let fixture: ComponentFixture<OtherComplianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherComplianceComponent]
    });
    fixture = TestBed.createComponent(OtherComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
