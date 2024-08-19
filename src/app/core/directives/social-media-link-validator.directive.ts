import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appSocialMediaLinkValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SocialMediaLinkValidatorDirective,
      multi: true
    }
  ]
})
export class SocialMediaLinkValidatorDirective {

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    const socialMediaPatterns = [
      /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?]/,
      /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9(\.\?)?]/,
      /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9(\.\?)?]/,
      /^(https?:\/\/)?(www\.)?(tr\.)?linkedin\.com\/[a-zA-Z0-9(\.\?)?]/,
      /^(https?:\/\/)?(www\.)?behance\.net\/[a-zA-Z0-9(\.\?)?]/,

    ];

    const isValid = socialMediaPatterns.some(pattern => pattern.test(value));

    return isValid ? null : { invalidSocialMediaLink: true };
  }
}
