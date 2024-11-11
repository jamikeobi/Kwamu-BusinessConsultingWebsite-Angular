import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotForProfitComponent } from './not-for-profit.component';

describe('NotForProfitComponent', () => {
  let component: NotForProfitComponent;
  let fixture: ComponentFixture<NotForProfitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotForProfitComponent]
    });
    fixture = TestBed.createComponent(NotForProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
