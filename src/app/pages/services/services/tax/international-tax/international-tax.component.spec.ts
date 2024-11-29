import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTaxComponent } from './international-tax.component';

describe('InternationalTaxComponent', () => {
  let component: InternationalTaxComponent;
  let fixture: ComponentFixture<InternationalTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalTaxComponent]
    });
    fixture = TestBed.createComponent(InternationalTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
