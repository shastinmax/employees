export type EmployeesListType = {
    data : EmployeesItem[]
    onDeleteItem:(id:number)=>void
    onToggleProp:(id:number,prop:string)=>void
}

export type EmployeesItem={
    name : string
    salary : number
    id: number
    increase:boolean
    rise:boolean
}