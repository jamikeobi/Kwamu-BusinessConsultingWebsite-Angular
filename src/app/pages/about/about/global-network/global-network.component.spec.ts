import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNetworkComponent } from './global-network.component';

describe('GlobalNetworkComponent', () => {
  let component: GlobalNetworkComponent;
  let fixture: ComponentFixture<GlobalNetworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalNetworkComponent]
    });
    fixture = TestBed.createComponent(GlobalNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
