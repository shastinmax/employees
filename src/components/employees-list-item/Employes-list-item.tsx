import './Employes-list-item.css'
import {EmployeesListItemType} from "./types";

export const EmployeesListItem = (props: EmployeesListItemType) => {
    const {
        name,
        salary,
        onDelete,
        onToggleProp,
        id,
        increase,
        rise
    } = props


    let increaseClass = increase ? 'increase' : ''
    let likeClass = rise ? 'like' : ''
    return (
        <li className={`list-group-item d-flex justify-content-between ${increaseClass} ${likeClass}`}>
                <span onClick={(e) => onToggleProp(id,e.currentTarget.getAttribute('data-toggle'))} data-toggle = 'rise'
                      className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input"
                   defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={(e) => onToggleProp(id,e.currentTarget.getAttribute('data-toggle'))} data-toggle = 'increase' type="button"
                        className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

