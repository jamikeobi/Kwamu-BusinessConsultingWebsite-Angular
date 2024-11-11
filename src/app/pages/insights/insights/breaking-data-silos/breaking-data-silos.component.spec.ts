import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingDataSilosComponent } from './breaking-data-silos.component';

describe('BreakingDataSilosComponent', () => {
  let component: BreakingDataSilosComponent;
  let fixture: ComponentFixture<BreakingDataSilosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakingDataSilosComponent]
    });
    fixture = TestBed.createComponent(BreakingDataSilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
