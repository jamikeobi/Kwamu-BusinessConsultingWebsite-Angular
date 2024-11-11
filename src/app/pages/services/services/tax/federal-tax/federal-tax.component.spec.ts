import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalTaxComponent } from './federal-tax.component';

describe('FederalTaxComponent', () => {
  let component: FederalTaxComponent;
  let fixture: ComponentFixture<FederalTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FederalTaxComponent]
    });
    fixture = TestBed.createComponent(FederalTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
