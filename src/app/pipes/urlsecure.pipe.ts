import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'urlsecure'
})
export class UrlsecurePipe implements PipeTransform {
  constructor(private secure: DomSanitizer){}

  transform(value: any, url: any): any {
    return this.secure.bypassSecurityTrustResourceUrl(url + value);
  }

}
