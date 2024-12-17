import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateStrategyComponent } from './corporate-strategy.component';

describe('CorporateStrategyComponent', () => {
  let component: CorporateStrategyComponent;
  let fixture: ComponentFixture<CorporateStrategyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateStrategyComponent]
    });
    fixture = TestBed.createComponent(CorporateStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
