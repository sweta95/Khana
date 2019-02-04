import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styles: [`.userdetail-container {
    display: flex;
    flex-direction: column;
    background-color:white;
    padding:20px;
  }
  .userdetail-container > * {
    width: 100%;
  }`]
})
export class UserdetailComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

}
