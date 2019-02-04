import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { UserprofileComponent } from './profile/userprofile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserdetailComponent } from './profile/userdetail/userdetail.component';
import { OrderhistoryComponent } from './profile/orderhistory/orderhistory.component';
import { FavouriteordersComponent } from './profile/favouriteorders/favouriteorders.component';
import { ManageaddressComponent } from './profile/address/manageaddress/manageaddress.component';
import { AddaddressComponent } from './profile/address/addaddress/addaddress.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:  SignupComponent }, 
  { path: 'forgotpassword', component:  ForgotpasswordComponent},
  
  { path: 'profile', component: UserprofileComponent ,
  children:[
    {path:'userdetail',component:UserdetailComponent},
    {path:'orderhistory',component:OrderhistoryComponent},
    {path:'favouriteorders',component:FavouriteordersComponent},
    {path:'manageaddress',component:ManageaddressComponent,
     children:[{path:'addaddress', component:AddaddressComponent}]
     },
    {path:'usersettings',component:SignupComponent},
  ]},
  { path: 'FavouriteOrders', component: UserprofileComponent },
  { path: 'ManageAddress', component: UserprofileComponent },
  { path: 'ContactUs', component: ContactUsComponent }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
