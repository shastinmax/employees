import {EmployeesListItem} from "../employees-list-item/Employes-list-item";
import './Employees-list.css'
import {EmployeesListType} from "./types";

export const EmployeesList = (props: EmployeesListType) => {

    const {data} = props

    return (
        <ul className='app-list list-group'>

            {data.map(({name,salary})=><EmployeesListItem key = {name + salary} name={name} salary={salary} />)}

        </ul>
    )
}