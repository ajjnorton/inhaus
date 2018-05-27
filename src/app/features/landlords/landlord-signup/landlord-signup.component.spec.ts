import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordSignupComponent } from './landlord-signup.component';

describe('LandlordSignupComponent', () => {
  let component: LandlordSignupComponent;
  let fixture: ComponentFixture<LandlordSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
