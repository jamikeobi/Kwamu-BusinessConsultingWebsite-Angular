import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningPolicyComponent } from './planning-policy.component';

describe('PlanningPolicyComponent', () => {
  let component: PlanningPolicyComponent;
  let fixture: ComponentFixture<PlanningPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningPolicyComponent]
    });
    fixture = TestBed.createComponent(PlanningPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
