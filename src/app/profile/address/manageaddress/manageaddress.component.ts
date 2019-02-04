import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styles: [`.manageaddress-container {
    display: flex;
    flex-direction: column;
    background-color:white;
    padding:20px;
  }
  .manageaddress-container > * {
    width: 100%;
  }
  .address-card 
  {
  max-width: 400px;
  float:center;
  }`]
})
export class ManageaddressComponent implements OnInit {
  colors=['red','blue','green'];
  constructor() { }

  ngOnInit() {
  }

}
