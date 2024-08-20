import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validators.service';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {


 //Para validaciones funcionables
//  public myForm:FormGroup = this.fb.group({
//   name:['',[Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
//   //para validaciones de email
//   email:['',[Validators.required, Validators.pattern(customValidators.emailPattern)]],
//   //usamos la validacion dependiendo si es async o no
//   username:['',[Validators.required, customValidators.cantBeStrider]],
//   password:['',[Validators.required, Validators.minLength(6)]],
//   password2:['',[Validators.required]],
//  });


//para validaciones con service injectable

 public myForm:FormGroup = this.fb.group({
  name:['',[Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
  //para validaciones de email
  // //para valida email usando la clase
  // email:['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[new EmailValidatorService()]],

  //para validar injectando el service en el constructor
  email:['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],
  //usamos la validacion dependiendo si es async o no
  username:['',[Validators.required, this.validatorsService.cantBeStrider]],
  password:['',[Validators.required, Validators.minLength(6)]],
  //para comparar password de form no async
  password2:['',[Validators.required]],
},
  {
   validators:[
    this.validatorsService.isFieldOneEqualFieldTwo('password','password2')
   ]

});

 constructor(private fb:FormBuilder,
  private validatorsService:ValidatorsService,
  private emailValidator:EmailValidatorService,
  ){}

 isValidField(field:string){
  return this.validatorsService.isValidField(this.myForm,field)
 }

 onSubmit(){
  this.myForm.markAllAsTouched();
 }


}
