import React from 'react';
import './App.css';
import {AppInfo} from "../app-info/App-info";
import {SearchPanel} from "../search-panel/Search-panel";
import {AppFilter} from "../app-filter/App-filter";
import {EmployeesList} from "../employees-list/Employees-list";
import {EmployeesAddForm} from "../employees-add-form/Employees-add-form";

export const App = () => {

    const data = [
        {name: 'Max', salary: 500, increase: true},
        {name: 'Bob', salary: 3000, increase: false},
        {name: 'Ann', salary: 1000, increase: true},
    ]

    return (
        <div className='app'>
            <AppInfo/>

            <div className='searchPanel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

