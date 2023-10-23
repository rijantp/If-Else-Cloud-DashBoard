import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { GridData } from "src/app/model/grid-data.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http:HttpClient=inject(HttpClient);

  getGridData():Observable<GridData>{
    return this.http.get("./assets/grid-data.json") as Observable<GridData>;
  }
}
