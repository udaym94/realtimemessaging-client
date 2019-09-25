import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.sass']
})
export class JoinComponent implements OnInit {
  joinForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.joinForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required]
    });
  }

  async addUser(data: FormGroup) {
    try {
      console.log(24, data, data.value);
    } catch (e) {
      console.log(26, e);
    }
  }

  get name() {
    return this.joinForm.get('name');
  }

  get email() {
    return this.joinForm.get('email');
  }
}
