import { ValidatorFn } from '@angular/forms';

export class UiValidators {
    public static conditionalValidator(predicate: any, validator: any): ValidatorFn {
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
