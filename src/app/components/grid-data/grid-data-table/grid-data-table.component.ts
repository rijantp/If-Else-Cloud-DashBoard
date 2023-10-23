import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { GridData } from 'src/app/model/grid-data.model';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-grid-data-table',
  templateUrl: './grid-data-table.component.html',
  styleUrls: ['./grid-data-table.component.scss']
})
export class GridDataTableComponent implements OnInit {
  gridData$!: Observable<GridData>;

  @Output()usersCount:EventEmitter<number>=new EventEmitter<number>;

apiService:ApiService=inject(ApiService);

ngOnInit(): void {
    this.gridData$=this.apiService.getGridData().pipe(tap((data:GridData)=>{
      this.usersCount.emit(data.grid_data.length);
      console.log(data.grid_data.length);
      
    }))
}
}
