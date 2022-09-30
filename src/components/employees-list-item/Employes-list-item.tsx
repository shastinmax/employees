import './Employes-list-item.css'
import {EmployeesListItemType} from "./types";
import {Component} from "react";

export class EmployeesListItem extends Component<EmployeesListItemType, { increase: boolean, isStar: boolean }> {
    constructor(props: EmployeesListItemType) {
        super(props);
        this.state = {
            increase: false,
            isStar: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    onStar = () => {
        this.setState(({isStar}) => ({
            isStar: !isStar
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props
        const {increase, isStar} = this.state

        let increaseClass = increase ? 'increase' : ''
        let likeClass = isStar ? 'like' : ''
        return (
            <li className={`list-group-item d-flex justify-content-between ${increaseClass} ${likeClass}`}>
                <span onClick={this.onStar}
                      className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input"
                       defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.onIncrease} type="button"
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

}
