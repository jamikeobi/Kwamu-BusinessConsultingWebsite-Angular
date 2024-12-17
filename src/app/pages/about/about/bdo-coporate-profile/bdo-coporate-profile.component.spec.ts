import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdoCoporateProfileComponent } from './bdo-coporate-profile.component';

describe('BdoCoporateProfileComponent', () => {
  let component: BdoCoporateProfileComponent;
  let fixture: ComponentFixture<BdoCoporateProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdoCoporateProfileComponent]
    });
    fixture = TestBed.createComponent(BdoCoporateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
