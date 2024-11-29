import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAuditComponent } from './tax-audit.component';

describe('TaxAuditComponent', () => {
  let component: TaxAuditComponent;
  let fixture: ComponentFixture<TaxAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxAuditComponent]
    });
    fixture = TestBed.createComponent(TaxAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
