import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanCapitalComponent } from './human-capital.component';

describe('HumanCapitalComponent', () => {
  let component: HumanCapitalComponent;
  let fixture: ComponentFixture<HumanCapitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanCapitalComponent]
    });
    fixture = TestBed.createComponent(HumanCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
