import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSecretarialComponent } from './corporate-secretarial.component';

describe('CorporateSecretarialComponent', () => {
  let component: CorporateSecretarialComponent;
  let fixture: ComponentFixture<CorporateSecretarialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateSecretarialComponent]
    });
    fixture = TestBed.createComponent(CorporateSecretarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
