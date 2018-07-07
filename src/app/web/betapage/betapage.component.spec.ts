import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetapageComponent } from './betapage.component';

describe('BetapageComponent', () => {
  let component: BetapageComponent;
  let fixture: ComponentFixture<BetapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
