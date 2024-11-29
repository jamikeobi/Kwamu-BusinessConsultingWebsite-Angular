import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxHealthCheckComponent } from './tax-health-check.component';

describe('TaxHealthCheckComponent', () => {
  let component: TaxHealthCheckComponent;
  let fixture: ComponentFixture<TaxHealthCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxHealthCheckComponent]
    });
    fixture = TestBed.createComponent(TaxHealthCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
