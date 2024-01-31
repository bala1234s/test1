import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userloginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  
  if (sessionStorage.getItem('isLoggedUser')=='true') {
    return true;
  }
  else { 
    router.navigate(['/login'],{queryParams:{returl:route.url}});
    return false;

  }
};
