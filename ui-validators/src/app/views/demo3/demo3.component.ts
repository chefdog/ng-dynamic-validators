import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rule } from 'src/app/models/rule.enum';
import { Status } from 'src/app/models/status.model';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styles: [
  ]
})
export class Demo3Component implements OnInit {
  statusData: Array<Status> = [];
  demoForm!: FormGroup;
  
  constructor(private readonly statusService: StatusService) {
  }

  ngOnInit(): void {
    this.statusData = this.statusService.getStatussen();
    const currentStatus = this.statusData.find(s => s.isCurrent);
    this.demoForm = new FormGroup({});
    this.demoForm.addControl('status', new FormControl(currentStatus?.id));
    this.demoForm.addControl('disclosure', new FormControl(false));
    this.demoForm.addControl('email', new FormControl());
    this.demoForm.addControl('comments', new FormControl());

    //setup inital control validation   
    currentStatus?.businessRules?.forEach(businesrule => {
      if (businesrule.rules) {
        const control = this.demoForm.get(businesrule.field) as FormControl;
        businesrule.rules.forEach(rule => {
          switch (rule) {
            case Rule.isHidden:
              control.disable(); // change this into actual hidden state
              break;
            case Rule.isRequired:
                control.setValidators([Validators.required]);               
              break;
            case Rule.isReadonly:
                control.disable();
            break;
          }
          control.updateValueAndValidity();
        });
      }        
    });

    this.status.valueChanges.subscribe(statusId => this.handleStatusChange(statusId));
  }

  onSave() {
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

  get email() {
    return this.demoForm.get('email') as FormControl;
  }

  private handleStatusChange(statusId: string): void {
    
    const selectedStatus = this.statusData.find(s => s.id === statusId);
    selectedStatus?.businessRules?.forEach(businesrule => {
      if (businesrule.rules) {
        const control = this.demoForm.get(businesrule.field) as FormControl;
        businesrule.rules.forEach(rule => {
          switch (rule) {
            case Rule.isHidden:
              control.disable(); // change this into actual hidden state
              break;
            case Rule.isRequired:
                control.setValidators([Validators.required]);               
              break;
            case Rule.isReadonly:
                control.disable();
            break;
            default:
              control.setValidators(null);  
            break;
          }
          control.updateValueAndValidity();
        });
      }        
    });
  }
}
