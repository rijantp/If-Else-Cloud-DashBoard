import { Pipe, PipeTransform } from '@angular/core';
import { UserName } from '../model/user-name.model';

@Pipe({
  name: 'namePreview'
})
export class NamePreviewPipe implements PipeTransform {

  transform(value: UserName): string {
    return `${value.first_name[0]}${value.last_name[0]}`
  }

}
