import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {

public myForm:FormGroup = this.fb.group({
  name:['',[Validators.required, Validators.minLength(4)]],
  favoriteGames: this.fb.array([
    ['Metal Gear',Validators.required],
    ['FallOut 4',Validators.required],
  ])
})

public newFavorite:FormControl = new FormControl('',Validators.required)

constructor(private fb:FormBuilder){}


//para usar en el ngfor
get favoriteGames(){
  return this.myForm.get('favoriteGames') as FormArray;
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


 isValidFieldInArray(formArray: FormArray, index:number){
  return formArray.controls[index].errors
   && formArray.controls[index].touched;

 }

 onAddToFavorites():void{
 if(this.newFavorite.invalid) return;
  const newGame = this.newFavorite.value;

  // this.favoriteGames.push(new FormControl(newGame, Validators.required));
  this.favoriteGames.push(
    this.fb.control(newGame, Validators.required)
  );
  this.newFavorite.reset();
 }

 onDeleteFavorite(index:number){
  this.favoriteGames.removeAt(index);
 }

onSubmit():void{
if(this.myForm.invalid){
  this.myForm.markAllAsTouched();
  return;
}
console.log(this.myForm.value);
//resetear el form una vez enviado el dato
//tambien resetea el input agregar fav
(this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
this.myForm.reset();
}

}
