import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdoNigeria2020Component } from './bdo-nigeria2020.component';

describe('BdoNigeria2020Component', () => {
  let component: BdoNigeria2020Component;
  let fixture: ComponentFixture<BdoNigeria2020Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdoNigeria2020Component]
    });
    fixture = TestBed.createComponent(BdoNigeria2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
