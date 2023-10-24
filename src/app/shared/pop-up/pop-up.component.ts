import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { UserName } from 'src/app/model/user-name.model';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
@Input() text!:UserName;;
@Output() action:EventEmitter<boolean>=new EventEmitter<boolean>;

@HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
  this.onActionClick(false);
}

onActionClick(deleteItem:boolean):void{
  this.action.emit(deleteItem);
}
}
