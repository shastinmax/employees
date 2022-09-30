import React, {Component} from 'react';
import './App.css';
import {AppInfo} from "../app-info/App-info";
import {SearchPanel} from "../search-panel/Search-panel";
import {AppFilter} from "../app-filter/App-filter";
import {EmployeesList} from "../employees-list/Employees-list";
import {EmployeesAddForm} from "../employees-add-form/Employees-add-form";
import {EmployeesItem} from "../employees-list/types";

export class App extends Component<any, { data: EmployeesItem[] }> {
    private maxId: number;

    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {name: 'Max', salary: 500, increase: false, rise: false, id: 1},
                {name: 'Bob', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Ann', salary: 1000, increase: false, rise: true, id: 3},
            ]
        }
        this.maxId = 4
    }

    onDeleteItem = (id: number) => {
        this.setState(({data}) => ({
            data: this.state.data.filter(item => item.id !== id)
        }))
    }

    onAddItem = (name: string, salary: number) => {
        const newItem = {
            name,
            salary: +(salary),
            id: this.maxId++,
            increase: true,
            rise: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id: number, prop: string) => {
        this.setState(({data}) => ({
            data: this.state.data.map(item => item.id === id ? {
                ...item,
                // @ts-ignore
                [prop]: !item[prop]
            } : item)
        }))
    }

    render() {
        const {data} = this.state
        const allEmployees = data.length
        const allIncrease = data.filter(item => item.increase === true).length

        return (
            <div className='app'>
                <AppInfo allEmployees={allEmployees} allIncrease={allIncrease}/>

                <div className='searchPanel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={data} onDeleteItem={this.onDeleteItem}
                               onToggleProp={this.onToggleProp}
                              />
                <EmployeesAddForm onAddItem={this.onAddItem}/>
            </div>
        );
    }
}

