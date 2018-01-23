import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-inline-form',
  templateUrl: './inline-form.component.html',
  styleUrls: ['./inline-form.component.scss']
})
export class InlineFormComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    $("input, textarea").focus(function() {
      $(this).closest(".form-group").find("> label").css({"color": "#4285F4"})
    })
    $("input, textarea").blur(function(){
      $(this).closest(".form-group").find("> label").css({"color": "#333"})
    })
  }
  

}
