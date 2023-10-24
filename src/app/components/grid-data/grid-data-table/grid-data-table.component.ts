import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { GridData } from 'src/app/model/grid-data.model';
import { UserDataCheckBox } from 'src/app/model/user-data-checkbox.model';
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
  userSelectionList:UserDataCheckBox[]=[];
  openPopUpBox:boolean=false;
  selectedUserData!:UsersData;
  deletedUserId$:BehaviorSubject<string>=new BehaviorSubject<string>('');
  deletedUserIds:string[]=[];
  selectedPage:number=1;

  apiService:ApiService=inject(ApiService);

  @Output()usersCount:EventEmitter<number>=new EventEmitter<number>;
  @Input() set pageSelected(num:number){
    this.selectedPage=num;
    this.deletedUserId$.next('')
  
  }

ngOnInit(): void {
  
this.gridData$=this.deletedUserId$.pipe(switchMap((userId:string)=>{
return this.apiService.getGridData().pipe(map((data:GridData)=>{
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
}),tap((value:GridData)=>{
  this.usersCount.emit(value.grid_data.length);
  this.userSelectionList=[];
  this.allUsersSelected=false;
  value.grid_data.forEach((user:UsersData)=>{
    this.userSelectionList.push({id:user.id,checked:false});
  })
}))
}

onAllCheckBoxClick(value:boolean):void{
  const selected=value;
  this.userSelectionList.forEach((selection:UserDataCheckBox,index:number)=>{
    this.userSelectionList[index].checked=selected
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
    this.deletedUserId$.next(this.selectedUserData.id);
    
  }
}
}
