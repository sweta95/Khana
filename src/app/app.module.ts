import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LocateproviderComponent } from './locateprovider/locateprovider.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule, MatToolbarModule, MatIconModule} from '@angular/material';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { FavouriteordersComponent } from './favouriteorders/favouriteorders.component';
import { ManageaddressComponent } from './manageaddress/manageaddress.component';
@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    LocateproviderComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    UserdetailComponent,
    OrderhistoryComponent,
    FavouriteordersComponent,
    ManageaddressComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
