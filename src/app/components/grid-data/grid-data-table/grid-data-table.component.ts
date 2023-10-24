import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { GridData } from 'src/app/model/grid-data.model';
import { UsersData } from 'src/app/model/user-data.model';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-grid-data-table',
  templateUrl: './grid-data-table.component.html',
  styleUrls: ['./grid-data-table.component.scss']
})
export class GridDataTableComponent implements OnInit {
  gridData$!: Observable<GridData>;
  allUsersSelected:boolean=false;
  userSelectionList:boolean[]=[];
  openPopUpBox:boolean=false;
  selectedUserData!:UsersData;
  deletedUserId$:BehaviorSubject<string>=new BehaviorSubject<string>('');
  deletedUserIds:string[]=[];

  @Output()usersCount:EventEmitter<number>=new EventEmitter<number>;

apiService:ApiService=inject(ApiService);

ngOnInit(): void {
  
  const apiData$:Observable<GridData>=this.apiService.getGridData().pipe(tap((data:GridData)=>{
    this.usersCount.emit(data.grid_data.length);
    for (let index = 0; index < data.grid_data.length; index++) {
      this.userSelectionList.push(false);
      
    }
  }));
this.gridData$=this.deletedUserId$.pipe(switchMap((userId:string)=>{
return apiData$.pipe(map((data:GridData)=>{
  return {...data,grid_data:data.grid_data.filter((userData:UsersData)=>{
    let isNotDeleted=true;
    this.deletedUserIds.forEach((id:string)=>{
      if(id===userData.id){
        isNotDeleted=false;
      }
    })

    return isNotDeleted
  })}
}))
}))
}

onAllCheckBoxClick(value:boolean):void{
  const selected=value;
  this.userSelectionList.forEach((selection:boolean,index:number)=>{
    this.userSelectionList[index]=selected
  });  
}

onPopUpOpen(userData:UsersData):void{
  this.selectedUserData=userData;
  this.openPopUpBox=true;
}


openConfirmBox(userData:UsersData):void{
  this.selectedUserData=userData;
  if(confirm(`${userData.name.first_name} ${userData.name.last_name} will be deleted`)){
    this.deletedUserIds.push(userData.id);
    this.deletedUserId$.next(this.selectedUserData.id)
  }
}
}
