import {EmployeesListItem} from "../employees-list-item/Employes-list-item";
import './Employees-list.css'

export const EmployeesList = () => {
    return (
        <ul className='app-list list-group'>
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    )
}