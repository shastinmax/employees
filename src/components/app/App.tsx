import React, {Component} from 'react';
import './App.css';
import {AppInfo} from "../app-info/App-info";
import {SearchPanel} from "../search-panel/Search-panel";
import {AppFilter} from "../app-filter/App-filter";
import {EmployeesList} from "../employees-list/Employees-list";
import {EmployeesAddForm} from "../employees-add-form/Employees-add-form";
import {EmployeesItem} from "../employees-list/types";

export class App extends Component<unknown, { data: EmployeesItem[], term: string, filter: string }> {
    private maxId: number;

    constructor(props: unknown) {
        super(props);
        this.state = {
            data: [
                {name: 'Max', salary: 500, increase: true, rise: false, id: 1},
                {name: 'Bob', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Ann', salary: 1000, increase: false, rise: true, id: 3},
            ],
            term: '',
            filter: 'all',
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
    searchEmp = (items: EmployeesItem[], term: string) => {
        if (!term) {
            return items
        }
        return items.filter(item => item.name.indexOf(term) > -1)
    }
    onUpdateSearch = (text: string) => {
        this.setState(() => ({
            term: text
        }))
    }
    filterPost = (items: EmployeesItem[], filter: string) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'MoreThen500':
                return items.filter(item => item.salary > 500)
            default:
                return items
        }
    }

    onFilterSelect = (filter:string) => {
        this.setState(({filter}))
    }

    render() {
        const {data, term, filter} = this.state
        const allEmployees = data.length
        const allIncrease = data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)

        return (
            <div className='app'>
                <AppInfo allEmployees={allEmployees} allIncrease={allIncrease}/>

                <div className='searchPanel'>
                    <SearchPanel onValueInput={this.onUpdateSearch} term={term}/>
                    <AppFilter onFilterSelect={this.onFilterSelect} filter={filter}/>
                </div>

                <EmployeesList data={visibleData} onDeleteItem={this.onDeleteItem}
                               onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAddItem={this.onAddItem}/>
            </div>
        );
    }
}

