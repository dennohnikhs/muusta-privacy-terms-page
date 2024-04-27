import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyTermsComponent } from './privacy-policy-terms.component';

describe('PrivacyPolicyTermsComponent', () => {
  let component: PrivacyPolicyTermsComponent;
  let fixture: ComponentFixture<PrivacyPolicyTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyTermsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyPolicyTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
