import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http:HttpClient=inject(HttpClient);

  getGridData():Observable<unknown>{
    return this.http.get("./assets/grid-data.json");
  }
}
