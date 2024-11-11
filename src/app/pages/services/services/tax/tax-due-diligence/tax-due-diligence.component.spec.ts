import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDueDiligenceComponent } from './tax-due-diligence.component';

describe('TaxDueDiligenceComponent', () => {
  let component: TaxDueDiligenceComponent;
  let fixture: ComponentFixture<TaxDueDiligenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxDueDiligenceComponent]
    });
    fixture = TestBed.createComponent(TaxDueDiligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
