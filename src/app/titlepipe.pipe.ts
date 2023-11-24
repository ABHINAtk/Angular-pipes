import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlepipe'
})
export class TitlepipePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr. ' + name;
    } else if (gender.toLowerCase() === 'female') {
      return 'Miss ' + name;
    } else {
      return name; // Handle other gender options as needed
    }
  }
}


