import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GridData } from 'src/app/model/grid-data.model';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-grid-data-table',
  templateUrl: './grid-data-table.component.html',
  styleUrls: ['./grid-data-table.component.scss']
})
export class GridDataTableComponent implements OnInit {
  gridData$!: Observable<GridData>;

apiService:ApiService=inject(ApiService);

ngOnInit(): void {
    this.gridData$=this.apiService.getGridData();
}
}
