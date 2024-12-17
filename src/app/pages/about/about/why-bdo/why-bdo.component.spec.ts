import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBdoComponent } from './why-bdo.component';

describe('WhyBdoComponent', () => {
  let component: WhyBdoComponent;
  let fixture: ComponentFixture<WhyBdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyBdoComponent]
    });
    fixture = TestBed.createComponent(WhyBdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
