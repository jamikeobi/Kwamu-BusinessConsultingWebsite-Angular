import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDilligenceComponent } from './due-dilligence.component';

describe('DueDilligenceComponent', () => {
  let component: DueDilligenceComponent;
  let fixture: ComponentFixture<DueDilligenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DueDilligenceComponent]
    });
    fixture = TestBed.createComponent(DueDilligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
