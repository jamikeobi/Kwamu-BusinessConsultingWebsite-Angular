import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthmanagementComponent } from './wealthmanagement.component';

describe('WealthmanagementComponent', () => {
  let component: WealthmanagementComponent;
  let fixture: ComponentFixture<WealthmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WealthmanagementComponent]
    });
    fixture = TestBed.createComponent(WealthmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
