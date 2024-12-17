import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBdoNigeriaComponent } from './about-bdo-nigeria.component';

describe('AboutBdoNigeriaComponent', () => {
  let component: AboutBdoNigeriaComponent;
  let fixture: ComponentFixture<AboutBdoNigeriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutBdoNigeriaComponent]
    });
    fixture = TestBed.createComponent(AboutBdoNigeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
