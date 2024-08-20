import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 200,
  inStorage: 2,
}


@Component({
  selector: 'reactive-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.html',
})
export class BasicPageComponent implements OnInit{

  //importar reactive form module
// public myForm:FormGroup = new FormGroup({
//  name: new FormControl(''),
//  prise: new FormControl(0),
//  inStorage: new FormControl(0),
// });

//form builder es lo mismo pero con una sintaxis mas linda creo
constructor(private fb:FormBuilder){}

//para cargar cuando inicia la pag
  ngOnInit(): void {
  // this.myForm.reset(rtx5090);
  }

public myForm:FormGroup = this.fb.group({

  name:['',[Validators.required, Validators.minLength(3)],],

  price:[0,[Validators.required, Validators.min(0)]],

  inStorage:[0,[Validators.required, Validators.min(0)]],
});

onSave():void{
 if(this.myForm.invalid){
   this.myForm.markAllAsTouched();

  return;
};

 console.log(this.myForm.value);

 //para establecer valores por defecto
 this.myForm.reset();

}

isValidField(field:string):boolean | null{
 return this.myForm.controls[field].errors && this.myForm.controls[field].touched
}

getFieldError(field:string):string | null{
 if(!this.myForm.controls[field])return null;

 const errors = this.myForm.controls[field].errors || {};

 for(const key of Object.keys(errors)){
  switch(key){
    case 'required':
      return 'Este campo es requerido';
    case 'minlength':
      return `Minimo ${errors['minlength'].requiredLength} caracters.`;
  }
 }
return null;
}

}
