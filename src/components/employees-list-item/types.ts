export type EmployeesListItemType = {
    name: string
    salary: number
    id: number
    onDelete: (id: React.MouseEvent<HTMLButtonElement>) => void
    increase: boolean
    rise: boolean
    onToggleProp: (id: number, prop: any) => void
}