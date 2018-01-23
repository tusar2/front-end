import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  buttonStyle = { 'color': '#F00', 'font-size': '20px', 'background-color': '#CCC' }
  constructor() { 
  }

  ngOnInit() {
  }

}
