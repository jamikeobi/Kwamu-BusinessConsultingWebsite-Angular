import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAlumniComponent } from './our-alumni.component';

describe('OurAlumniComponent', () => {
  let component: OurAlumniComponent;
  let fixture: ComponentFixture<OurAlumniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurAlumniComponent]
    });
    fixture = TestBed.createComponent(OurAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
