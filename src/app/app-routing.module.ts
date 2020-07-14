import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetapiComponent } from './getapi/getapi.component';
import { PostapiComponent } from './postapi/postapi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: 'getapi', component: GetapiComponent
},
{
  path: 'postapi', component: PostapiComponent
},
{
  path: '', component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
