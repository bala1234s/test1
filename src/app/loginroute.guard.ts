import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginrouteGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);



  if (sessionStorage.getItem('isLoggedAdmin')) {
    if (sessionStorage.getItem('isLoggedAdmin') == "admintrue") {
      return true;
    }
    return false;
  }
  else if (sessionStorage.getItem('isLoggedUser') ) {
    if (sessionStorage.getItem('isLoggedUser')=="usertrue") { 
      return true;
    }
    return false;
    
  }
  
  else {
    router.navigate(['/login']);
    return false;
   }
};
