import { GridColumn } from "./grid-column.model";
import { UsersData } from "./user-data.model";

export interface GridData{
    grid_columns:GridColumn[];
    grid_data:UsersData[];
}


