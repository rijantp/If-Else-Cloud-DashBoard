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
  this.selectedPage=pageCount;
  this.onPageSelected.emit(this.selectedPage);
}

onNext():void{
  this.selectedPage<this.pageCountList.length? this.selectedPage++:this.selectedPage=1;
  this.onPageSelected.emit(this.selectedPage);
}

onPrevious():void{
  this.selectedPage===1? this.selectedPage=this.pageCountList.length:this.selectedPage--;
  this.onPageSelected.emit(this.selectedPage);
}

}
