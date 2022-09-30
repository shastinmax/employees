import {EmployeesListItem} from "../employees-list-item/Employes-list-item";
import './Employees-list.css'
import {EmployeesListType} from "./types";

export const EmployeesList = (props: EmployeesListType) => {

    const {data, onDeleteItem, onToggleProp} = props

    const onDelete = (id: number) => {
        onDeleteItem(id)
    }

    return (
        <ul className='app-list list-group'>

            {data.map(({name, salary, id, increase,rise}) =>
                <EmployeesListItem key={id} name={name} increase={increase} rise={rise}
                                   salary={salary} id={id}
                                   onDelete={() => onDelete(id)}
                                   onToggleProp={onToggleProp}/>)}

        </ul>
    )
}