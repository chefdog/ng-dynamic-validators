import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UiValidators } from 'src/app/components/validators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  statussen = [
    {id: 1, status: 'nieuw'},
    {id: 2, status: 'inprogress'},
    {id: 3, status: 'closed'}
  ];
  demoForm: FormGroup = new FormGroup({});
  
  constructor() {
  }

  ngOnInit(): void {
    this.demoForm.addControl('status', new FormControl());
    this.demoForm.addControl('email', new FormControl());
    this.demoForm.addControl('opmerkingen', new FormControl(undefined, UiValidators.conditionalValidator(() => (this.demoForm.get('status')?.value === 1), Validators.required )));
  }

  onSave() {
    console.log('save');
    if(this.demoForm.valid) {
      console.log(this.demoForm.value);
    }
  }
}
