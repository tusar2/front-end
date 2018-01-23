import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address, User, states } from './../../../interface/form-model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit, OnChanges {

  @Input() user: User;
  userForm: FormGroup;
  states = states;

  constructor(private formBuilder: FormBuilder) { // , private user: User
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.userForm.reset({
      name: this.user.name,
      address: this.user.addresses[0] || new Address()
    });
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required ],
      address: this.formBuilder.group(new Address()),
      // address: this.formBuilder.group({
      //   street: '',
      //   city: '',
      //   state: '',
      //   zip: '',
      // }),
      // power: '',
      // sidekick: ''
    });

    // this.userForm.setValue({
    //   name: this.user.name,
    //   address: this.user.addresses !== undefined ? this.user.addresses[0] : new Address()
    // });
  }

}
