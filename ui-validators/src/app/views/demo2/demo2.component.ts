import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
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
    this.demoForm.addControl('status', new FormControl());
    this.demoForm.addControl('sameAddress', new FormControl(false));
    this.demoForm.addControl('email', new FormControl());
    this.demoForm.addControl('opmerkingen', new FormControl());

    this.statusControl.valueChanges.subscribe(val => {
      if(val === '1') {
        this.opmerkingenControl.setValidators([Validators.required, Validators.minLength(5)]);
      }
      else {
        this.opmerkingenControl.setValidators(null);
      }
      this.opmerkingenControl.updateValueAndValidity();
    });
  }

  onSave() {
    console.log('save');
    if(this.demoForm.valid) {
      console.log(this.demoForm.value);
    }
  }

  get statusControl() {
    return this.demoForm.get('status') as FormControl;
  }

  get opmerkingenControl() {
    return this.demoForm.get('opmerkingen') as FormControl;
  }
}
