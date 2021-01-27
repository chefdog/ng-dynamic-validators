import { Injectable } from '@angular/core';
import { Rule } from '../models/rule.enum';
import { Status } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statussen: Array<Status>;
  constructor() { 
    this.statussen = [
      { id: '1', 
        isCurrent: true,
        title: 'new', 
        businessRules: [
          { field: 'disclosure', rules: [Rule.isHidden]},
          { field: 'email', rules: [Rule.isRequired]}
        ] 
      },
      { id: '2', 
        isCurrent: false,
        title: 'inprogress', 
        businessRules: [
          { field: 'comments', rules: [Rule.isRequired]},
          { field: 'email', rules: [Rule.isNotRequired]}
        ] 
      },
      { id: '3', 
        isCurrent: false,
        title: 'done', 
        businessRules: [      
        ] 
      }
    ];
    
  }

  getStatussen() : Array<Status> {
    return this.statussen;
  }
}
