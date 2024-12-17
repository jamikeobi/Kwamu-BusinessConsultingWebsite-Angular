import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPurposeComponent } from './special-purpose.component';

describe('SpecialPurposeComponent', () => {
  let component: SpecialPurposeComponent;
  let fixture: ComponentFixture<SpecialPurposeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialPurposeComponent]
    });
    fixture = TestBed.createComponent(SpecialPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
