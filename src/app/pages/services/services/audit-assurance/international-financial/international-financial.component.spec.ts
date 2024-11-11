import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalFinancialComponent } from './international-financial.component';

describe('InternationalFinancialComponent', () => {
  let component: InternationalFinancialComponent;
  let fixture: ComponentFixture<InternationalFinancialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalFinancialComponent]
    });
    fixture = TestBed.createComponent(InternationalFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
