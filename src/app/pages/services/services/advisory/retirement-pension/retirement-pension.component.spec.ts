import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementPensionComponent } from './retirement-pension.component';

describe('RetirementPensionComponent', () => {
  let component: RetirementPensionComponent;
  let fixture: ComponentFixture<RetirementPensionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetirementPensionComponent]
    });
    fixture = TestBed.createComponent(RetirementPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
