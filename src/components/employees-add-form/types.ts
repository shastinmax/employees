import {EmployeesItem} from "../employees-list/types";

export type StateTypeProps = {
    name: string;
    salary: string
}
export type EmployeesTypeProps = {
    onAddItem: (name: string, salary: number) => void
}