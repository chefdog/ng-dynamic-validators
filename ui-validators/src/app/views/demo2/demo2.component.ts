import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: []
})
export class Demo2Component implements OnInit {
  statussen = [
    {id: 1, status: 'nieuw'},
    {id: 2, status: 'inprogress'},
    {id: 3, status: 'closed'}
  ];
  demoForm!: FormGroup;
  
  constructor() {
  }

  ngOnInit(): void {
    this.demoForm = new FormGroup({});
    this.demoForm.addControl('status', new FormControl(this.statussen[0].id));
    this.demoForm.addControl('email', new FormControl());
    this.demoForm.addControl('comments', new FormControl());

    this.status.valueChanges.subscribe(val => {
      if(val === '2') {
        this.comments.setValidators([Validators.required, Validators.minLength(5)]);
      }
      else {
        this.comments.setValidators(null);
      }
      this.comments.updateValueAndValidity();
    });
  }

  onSave() {
    console.log('save');
    if(this.demoForm.valid) {
      console.log(this.demoForm.value);
    }
  }

  get status() {
    return this.demoForm.get('status') as FormControl;
  }

  get comments() {
    return this.demoForm.get('comments') as FormControl;
  }
}
