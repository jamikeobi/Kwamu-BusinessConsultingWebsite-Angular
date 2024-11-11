import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalResourcesComponent } from './natural-resources.component';

describe('NaturalResourcesComponent', () => {
  let component: NaturalResourcesComponent;
  let fixture: ComponentFixture<NaturalResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaturalResourcesComponent]
    });
    fixture = TestBed.createComponent(NaturalResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
