import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutoryAuditsComponent } from './statutory-audits.component';

describe('StatutoryAuditsComponent', () => {
  let component: StatutoryAuditsComponent;
  let fixture: ComponentFixture<StatutoryAuditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatutoryAuditsComponent]
    });
    fixture = TestBed.createComponent(StatutoryAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
