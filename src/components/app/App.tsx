import React, {Component} from 'react';
import './App.css';
import {AppInfo} from "../app-info/App-info";
import {SearchPanel} from "../search-panel/Search-panel";
import {AppFilter} from "../app-filter/App-filter";
import {EmployeesList} from "../employees-list/Employees-list";
import {EmployeesAddForm} from "../employees-add-form/Employees-add-form";
import {EmployeesItem} from "../employees-list/types";

export class App extends Component<any, { data: EmployeesItem[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {name: 'Max', salary: 500, id: 1},
                {name: 'Bob', salary: 3000, id: 2},
                {name: 'Ann', salary: 1000, id: 3},
            ]
        }
    }
    onDeleteItem = (id: number) => {
        this.setState(({data}) =>({
            data: this.state.data.filter(item => item.id !== id)
        }))
    }

    render() {
        const {data} = this.state

        return (
            <div className='app'>
                <AppInfo/>

                <div className='searchPanel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={data} onDeleteItem={this.onDeleteItem}/>
                <EmployeesAddForm/>
            </div>
        );
    }
}

