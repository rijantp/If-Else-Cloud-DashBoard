import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.scss']
})
export class GridDataComponent {
selectedPage:number=1;
usersCount:number=0;
chipText:string='';

onUsersCount(count:number):void{
  this.usersCount=count;
  this.chipText=`${count} users`;
}
}
