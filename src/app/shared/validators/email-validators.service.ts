import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator{



  validate(control: AbstractControl<any, any>):Observable<ValidationErrors | null> {
    const email = control.value;
    //subscriber es el .subcribe
    const httpCallObservable = new Observable<ValidationErrors|null>((subsciber)=>{
       console.log({email});

       if(email === 'jesusgonzales@gmail.com'){

        //
        subsciber.next({emailTaken:true});

        //limpieza y se desubcribe
        subsciber.complete();
        //  return???;
       }

       subsciber.next(null);
       subsciber.complete();
    }).pipe(
      delay(3000)
    )

   return httpCallObservable;


    //para validar junto al backend


  // validate(control: AbstractControl<any, any>):Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({email})
  //   return of({
  //     emailTaken:true
  //   }).pipe(
  //     //para demorar un rato mostrar
  //     delay(2000)
  //   )



  //TODO Como Normalmente se haria con un backend y un api

  // return this.http.get<any[]>(`url${email}`)
  // .pipe(
  //   map(resp => {return(resp.length === 0)
  //   ?null
  //   :{emailTaken:true}
  // })
  // );

  }



}
