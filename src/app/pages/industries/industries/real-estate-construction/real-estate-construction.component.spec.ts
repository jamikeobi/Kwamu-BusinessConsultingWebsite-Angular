import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateConstructionComponent } from './real-estate-construction.component';

describe('RealEstateConstructionComponent', () => {
  let component: RealEstateConstructionComponent;
  let fixture: ComponentFixture<RealEstateConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateConstructionComponent]
    });
    fixture = TestBed.createComponent(RealEstateConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
