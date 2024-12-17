import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTelecommunicationComponent } from './technology-telecommunication.component';

describe('TechnologyTelecommunicationComponent', () => {
  let component: TechnologyTelecommunicationComponent;
  let fixture: ComponentFixture<TechnologyTelecommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyTelecommunicationComponent]
    });
    fixture = TestBed.createComponent(TechnologyTelecommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
