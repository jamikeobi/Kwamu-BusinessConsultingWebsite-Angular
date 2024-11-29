import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFinanceComponent } from './business-finance.component';

describe('BusinessFinanceComponent', () => {
  let component: BusinessFinanceComponent;
  let fixture: ComponentFixture<BusinessFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessFinanceComponent]
    });
    fixture = TestBed.createComponent(BusinessFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
