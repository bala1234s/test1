import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { loginrouteGuard } from './loginroute.guard';
import { adminloginGuard } from './adminlogin.guard';
import { userloginGuard } from './userlogin.guard';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImagegenComponent } from './imagegen/imagegen.component';

const routes: Routes = [

  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'imgUpload',
    component:ImageUploadComponent
  },
  {
    path: 'admin',
    component:AdminComponent,canActivate:[adminloginGuard]
  },
  {
    path: 'user',
    component:UserComponent,canActivate:[userloginGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
