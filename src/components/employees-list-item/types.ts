export type EmployeesListItemType = {
    name : string
    salary : number
    id: number
    onDelete: (id: React.MouseEvent<HTMLButtonElement>)=>void
}