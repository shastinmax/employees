import {EmployeesListItemType} from "../employees-list-item/types";

export type EmployeesListType = {
    data : EmployeesItem[]
    onDeleteItem:(id:number)=>void
}

export type EmployeesItem={
    name : string
    salary : number
    id: number
}