import { LandlordSignupModule } from './landlord-signup.module';

describe('LandlordSignupModule', () => {
  let landlordSignupModule: LandlordSignupModule;

  beforeEach(() => {
    landlordSignupModule = new LandlordSignupModule();
  });

  it('should create an instance', () => {
    expect(landlordSignupModule).toBeTruthy();
  });
});
