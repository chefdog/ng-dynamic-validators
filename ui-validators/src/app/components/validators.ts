import { ValidatorFn } from '@angular/forms';

export class UiValidators {
    public static conditionalValidator(predicate: any, validator: any): ValidatorFn {
        console.log(predicate);
        console.log(validator);
        return (formControl => {
            if (!formControl.parent) {
                return null;
            }
            if (predicate()) {
                return validator(formControl);
            }
            return null;
        });
    }
}
