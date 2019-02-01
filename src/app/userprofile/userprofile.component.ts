import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent
{  
  constructor(private fb:FormBuilder) {  }   
  userProfileForm = this.fb.group({
    fullName: ['',Validators.required],
    mobileNumber: [''],
    email:[''],
    shippingAddress: this.fb.group({
      shippingstreetaddressline1: [''],
      shippingstreetaddressline2: [''],
      shippingcity: [''],
      shippingpincode: ['']
    }),
    billingAddress: this.fb.group({
      billingstreetaddressline1: [''],
      billingstreetaddressline2: [''],
      billingcity: [''],
      billingpincode: ['']
    })
   });
    onSubmit()
    {
      console.log(this.userProfileForm);
    }
    updateProfile()
    {
      
    }
    gotouserdetail()
    {
    
    }
   }
