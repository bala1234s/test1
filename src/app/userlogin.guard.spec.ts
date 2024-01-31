import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userloginGuard } from './userlogin.guard';

describe('userloginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userloginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
