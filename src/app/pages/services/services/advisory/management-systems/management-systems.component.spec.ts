import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSystemsComponent } from './management-systems.component';

describe('ManagementSystemsComponent', () => {
  let component: ManagementSystemsComponent;
  let fixture: ComponentFixture<ManagementSystemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementSystemsComponent]
    });
    fixture = TestBed.createComponent(ManagementSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
