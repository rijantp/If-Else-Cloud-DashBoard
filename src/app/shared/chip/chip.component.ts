import { AfterViewInit, Component, ElementRef,Input, Renderer2, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements AfterViewInit {
renderer:Renderer2=inject(Renderer2);

@Input()text:string='';
@Input() backGroundColor:string|undefined;
@Input() textColor:string|undefined;

@ViewChild('textRef', { static: false }) textElement!: ElementRef;

ngAfterViewInit():void{
  if(this.textColor && this.backGroundColor){
  this.renderer.setStyle(this.textElement.nativeElement,'color',this.textColor);
  this.renderer.setStyle(this.textElement.nativeElement,'background-color',this.backGroundColor);
  this.renderer.setStyle(this.textElement.nativeElement,'border-color',this.textColor);
  }
}
}
