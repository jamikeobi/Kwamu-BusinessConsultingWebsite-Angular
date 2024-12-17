import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractiveComponent } from './extractive.component';

describe('ExtractiveComponent', () => {
  let component: ExtractiveComponent;
  let fixture: ComponentFixture<ExtractiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtractiveComponent]
    });
    fixture = TestBed.createComponent(ExtractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
