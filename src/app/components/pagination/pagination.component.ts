import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
pageCountList:number[]=[];
selectedPage:number=1;

@Output() onPageSelected:EventEmitter<number>=new EventEmitter<number>;
@Input() set totalCount(count:number){
  this.pageCountList=[];
  const lastPage:number=count%10===0?count/10:count/10+1;
  for(let i=1; i<= lastPage ;i++){
    this.pageCountList.push(i)
  }
}

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
