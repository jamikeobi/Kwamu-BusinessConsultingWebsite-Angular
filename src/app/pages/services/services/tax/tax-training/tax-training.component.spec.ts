import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxTrainingComponent } from './tax-training.component';

describe('TaxTrainingComponent', () => {
  let component: TaxTrainingComponent;
  let fixture: ComponentFixture<TaxTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxTrainingComponent]
    });
    fixture = TestBed.createComponent(TaxTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
