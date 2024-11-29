import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FMCGComponent } from './fmcg.component';

describe('FMCGComponent', () => {
  let component: FMCGComponent;
  let fixture: ComponentFixture<FMCGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FMCGComponent]
    });
    fixture = TestBed.createComponent(FMCGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
