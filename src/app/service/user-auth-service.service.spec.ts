import { TestBed, inject } from '@angular/core/testing';

import { UserAuthServiceService } from './user-auth-service.service';

describe('UserAuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthServiceService]
    });
  });

  it('should be created', inject([UserAuthServiceService], (service: UserAuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
