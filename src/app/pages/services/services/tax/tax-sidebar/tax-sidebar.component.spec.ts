import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSidebarComponent } from './tax-sidebar.component';

describe('TaxSidebarComponent', () => {
  let component: TaxSidebarComponent;
  let fixture: ComponentFixture<TaxSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxSidebarComponent]
    });
    fixture = TestBed.createComponent(TaxSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
