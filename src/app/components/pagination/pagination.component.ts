import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
pageCountList:number[]=[1,2,3,4];
selectedPage:number=1;

@Output() onPageSelected:EventEmitter<number>=new EventEmitter<number>;

onPageClick(pageCount:number):void{
  this.onPageSelected.emit(pageCount);
}
}
