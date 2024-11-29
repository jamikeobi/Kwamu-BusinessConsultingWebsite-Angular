import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInterventionComponent } from './tax-intervention.component';

describe('TaxInterventionComponent', () => {
  let component: TaxInterventionComponent;
  let fixture: ComponentFixture<TaxInterventionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxInterventionComponent]
    });
    fixture = TestBed.createComponent(TaxInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
