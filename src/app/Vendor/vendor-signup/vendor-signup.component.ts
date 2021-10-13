import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';
@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.component.html',
  styleUrls: ['./vendor-signup.component.scss'],
  
  animations: [
    flyInOut(),
    expand()
  ]
})
export class VendorSignupComponent implements OnInit {

  
  VSForm !: FormGroup;
  err ! : String;
  light ! : string;
  constructor(private fb: FormBuilder, private sharingService:SharingService) { }

  ngOnInit(): void {
    function ConfirmedValidator(controlName: string, matchingControlName: string){
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ confirmedValidator: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
    this.VSForm = this.fb.group({
      ShopName: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(46)
      ]],
      emailId: ['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],
      contact: ['',[
        Validators.required,
        // Validators.min(999999999),
        // Validators.max(99999999999)
      ]],
      state: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(46)
      ]],
      city: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(46)
      ]],
      area: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(46)
      ]],
      pass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      conPass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8),
      ]],
      agree:[false,[
        Validators.requiredTrue
      ]]
    }, { 
      validator: ConfirmedValidator('pass', 'conPass')
    });
    
    this.light = this.sharingService.getData();
    
  }



  get name(){
    return this.VSForm.get('ShopName');
  }

  get email(){
    return this.VSForm.get('emailId');
  }

  get contact(){
return this.VSForm.get('contact');
  }

  get state(){
    return this.VSForm.get('state');
  }
  get city(){
    return this.VSForm.get('city');
  }
  get area(){
    return this.VSForm.get('area');
  }

  get password(){
    return this.VSForm.get('pass');
  }

  get cpassword(){
    return this.VSForm.get('conPass');
  }

  get agree(){
    return this.VSForm.get('agree');
  }

  submit(){
    
  }


}
