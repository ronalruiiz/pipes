import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string = '', band: boolean): any {
    let valueResp = '';
    if (band === true) {
      for (let i = 0 ; i < value.length ; i++) {
        valueResp += '*';
      }
    } else {
      return value;
    }
    return valueResp;
  }

}
