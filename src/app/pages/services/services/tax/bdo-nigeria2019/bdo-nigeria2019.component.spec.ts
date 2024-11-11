import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdoNigeria2019Component } from './bdo-nigeria2019.component';

describe('BdoNigeria2019Component', () => {
  let component: BdoNigeria2019Component;
  let fixture: ComponentFixture<BdoNigeria2019Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdoNigeria2019Component]
    });
    fixture = TestBed.createComponent(BdoNigeria2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
