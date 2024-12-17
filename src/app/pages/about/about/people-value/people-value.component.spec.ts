import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleValueComponent } from './people-value.component';

describe('PeopleValueComponent', () => {
  let component: PeopleValueComponent;
  let fixture: ComponentFixture<PeopleValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleValueComponent]
    });
    fixture = TestBed.createComponent(PeopleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
