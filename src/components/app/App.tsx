import React from 'react';
import './App.css';
import {AppInfo} from "../app-info/App-info";
import {SearchPanel} from "../search-panel/Search-panel";
import {AppFilter} from "../app-filter/App-filter";
import {EmployeesList} from "../employees-list/Employees-list";
import {EmployeesAddForm} from "../employees-add-form/Employees-add-form";

export const App = () => {
    return (
        <div className='app'>
            <AppInfo/>

            <div className='searchPanel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    );
}

