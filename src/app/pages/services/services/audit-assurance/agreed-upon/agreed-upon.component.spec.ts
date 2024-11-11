import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreedUponComponent } from './agreed-upon.component';

describe('AgreedUponComponent', () => {
  let component: AgreedUponComponent;
  let fixture: ComponentFixture<AgreedUponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreedUponComponent]
    });
    fixture = TestBed.createComponent(AgreedUponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
