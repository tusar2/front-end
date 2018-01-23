import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  sdrcians:any[];
  constructor() { }

  ngOnInit() {
    this.sdrcians = ["Naseem", "Rati", "Pratyush", "Harsh", "Pabitra", "sasmita", "Pooja", "Laxman", "Suman", "Malaya", "Ripon", "Azar", "Devi bhai"]
  }

}
