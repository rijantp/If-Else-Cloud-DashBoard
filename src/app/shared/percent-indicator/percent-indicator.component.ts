import {Component, Renderer2, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-percent-indicator',
  templateUrl: './percent-indicator.component.html',
  styleUrls: ['./percent-indicator.component.scss']
})
export class PercentIndicatorComponent implements AfterViewInit {
  
@Input()value:number | string=0;

@ViewChild('valueRef', { static: false }) valueElement!: ElementRef;
@ViewChild('balanceRef', { static: false }) balanceElement!: ElementRef;

  constructor(private renderer:Renderer2) {
  }

  ngAfterViewInit():void{
    this.renderer.setStyle(this.valueElement.nativeElement,'width',`${this.value}%`);
    this.renderer.setStyle(this.balanceElement.nativeElement,'width',`${100-Number(this.value)}%`);
  }
   
}
