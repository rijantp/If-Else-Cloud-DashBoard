import { UserName } from "./user-name.model";
import { UserTeam } from "./user-team.model";

export interface UsersData{
    id:string,
    name:UserName,
    status:string,
    email:string,
    role:string,
    license_used:number,
    teams:UserTeam[]
}