import './Employees-add-form.css'
import {ChangeEvent, Component} from "react";
import {StateTypeProps} from "./types";

export class EmployeesAddForm extends Component<any, StateTypeProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueSalary = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            salary: e.target.value,
        })
    }

    onValueName = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            name: e.target.value,
        })
    }

    render() {

        const{name,salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name='name'
                           value={name}
                    onChange={this.onValueName}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name='salary'
                           value={salary}
                    onChange={this.onValueSalary}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}