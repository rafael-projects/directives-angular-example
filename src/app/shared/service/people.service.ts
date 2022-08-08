import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName:'rafael',
        lastName: 'soares',
        age: 43
      },
      {
        firstName:'rafaela',
        lastName: 'silva',
        age: 12
      },
      {
        firstName:'Whitney',
        lastName: 'antonia',
        age: 6
      }
    ]

    return of(peopleArray)
  }
}
