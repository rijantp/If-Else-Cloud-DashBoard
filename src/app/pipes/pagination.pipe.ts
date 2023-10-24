import { Pipe, PipeTransform } from '@angular/core';
import { UsersData } from '../model/user-data.model';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(data: UsersData[], currentPageNum: number): UsersData[] {
    const initialIndex:number=(currentPageNum-1)*10;
    const finalIndex:number=(currentPageNum)*10-1;
    return data.filter((user:UsersData,index:number)=>{
      return index >= initialIndex && index <= finalIndex
    })
  }

}
