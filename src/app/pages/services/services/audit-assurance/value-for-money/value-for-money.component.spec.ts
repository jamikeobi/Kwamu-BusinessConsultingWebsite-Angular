import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueForMoneyComponent } from './value-for-money.component';

describe('ValueForMoneyComponent', () => {
  let component: ValueForMoneyComponent;
  let fixture: ComponentFixture<ValueForMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValueForMoneyComponent]
    });
    fixture = TestBed.createComponent(ValueForMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
