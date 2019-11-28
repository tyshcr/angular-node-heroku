import { Directive } from '@angular/core'
import { NG_VALIDATORS, FormControl } from '@angular/forms'

@Directive({
  selector: '[passwordValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: passwordValidation,
    multi: true
  }]
})
export class PasswordValidatorDirective {
  constructor() { }
}

export function passwordValidation(control: FormControl) {
    let password = control.value
    let regex = new RegExp(/((?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{8,64})/)
    if (password && regex.test(password)) {
      return null
    }
    return { error: true }
}
