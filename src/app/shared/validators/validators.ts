import { FormControl, ValidationErrors } from "@angular/forms";


export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cantBeStrider = (control:FormControl):ValidationErrors | null=>{

  //limpiar espacios en blanco y minuscula
  const value:string = control.value.trim().toLowerCase();
 //validacion de si existe ese username
  if(value === 'strider'){
  return{
    noStrider:true,
  }
  }
  return null;
}

