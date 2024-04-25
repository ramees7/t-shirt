import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

export const userGuard: CanActivateFn = (route, state) => {
  
  const api=inject(ApiService)
  const toastr=inject(ToastrService)
  const router=inject(Router)
  if(api.isUserLoggedGuard()){
    return true;
  }
  else{
    toastr.warning("Please Login First")
    router.navigateByUrl('/login')
    return false
  }
};
