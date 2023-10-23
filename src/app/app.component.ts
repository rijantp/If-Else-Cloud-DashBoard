import { Component, Input, inject } from '@angular/core';
import { ApiService } from './services/api-service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "asd";
  ser=inject(ApiService);

 public constructor() {
    this.ser.getGridData().subscribe(val=>console.log(val))
  }
}
