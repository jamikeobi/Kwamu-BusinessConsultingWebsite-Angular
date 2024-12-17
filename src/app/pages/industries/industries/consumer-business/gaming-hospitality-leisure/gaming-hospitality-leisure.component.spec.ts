import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingHospitalityLeisureComponent } from './gaming-hospitality-leisure.component';

describe('GamingHospitalityLeisureComponent', () => {
  let component: GamingHospitalityLeisureComponent;
  let fixture: ComponentFixture<GamingHospitalityLeisureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamingHospitalityLeisureComponent]
    });
    fixture = TestBed.createComponent(GamingHospitalityLeisureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
