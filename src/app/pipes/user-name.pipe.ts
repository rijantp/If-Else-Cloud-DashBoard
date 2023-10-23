import { Pipe, PipeTransform } from '@angular/core';
import { UserName } from '../model/user-name.model';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: UserName): string {
    return `${value.first_name} ${value.last_name}`;
  }

}
