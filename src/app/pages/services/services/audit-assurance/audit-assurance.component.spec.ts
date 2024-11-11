import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditAssuranceComponent } from './audit-assurance.component';

describe('AuditAssuranceComponent', () => {
  let component: AuditAssuranceComponent;
  let fixture: ComponentFixture<AuditAssuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditAssuranceComponent]
    });
    fixture = TestBed.createComponent(AuditAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
