import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditSidebarComponent } from './audit-sidebar.component';

describe('AuditSidebarComponent', () => {
  let component: AuditSidebarComponent;
  let fixture: ComponentFixture<AuditSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditSidebarComponent]
    });
    fixture = TestBed.createComponent(AuditSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
