import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAuditComponent } from './performance-audit.component';

describe('PerformanceAuditComponent', () => {
  let component: PerformanceAuditComponent;
  let fixture: ComponentFixture<PerformanceAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceAuditComponent]
    });
    fixture = TestBed.createComponent(PerformanceAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
