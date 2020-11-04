import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:"", component: UploadComponent},
  {path:"upload", component: UploadComponent},
  {path:"users", component: UserListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
