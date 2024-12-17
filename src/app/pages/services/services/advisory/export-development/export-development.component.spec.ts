import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDevelopmentComponent } from './export-development.component';

describe('ExportDevelopmentComponent', () => {
  let component: ExportDevelopmentComponent;
  let fixture: ComponentFixture<ExportDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportDevelopmentComponent]
    });
    fixture = TestBed.createComponent(ExportDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
