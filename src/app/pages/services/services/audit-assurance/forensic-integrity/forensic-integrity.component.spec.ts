import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForensicIntegrityComponent } from './forensic-integrity.component';

describe('ForensicIntegrityComponent', () => {
  let component: ForensicIntegrityComponent;
  let fixture: ComponentFixture<ForensicIntegrityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForensicIntegrityComponent]
    });
    fixture = TestBed.createComponent(ForensicIntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
