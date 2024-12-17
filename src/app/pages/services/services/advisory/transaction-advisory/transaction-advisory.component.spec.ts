import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAdvisoryComponent } from './transaction-advisory.component';

describe('TransactionAdvisoryComponent', () => {
  let component: TransactionAdvisoryComponent;
  let fixture: ComponentFixture<TransactionAdvisoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionAdvisoryComponent]
    });
    fixture = TestBed.createComponent(TransactionAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
