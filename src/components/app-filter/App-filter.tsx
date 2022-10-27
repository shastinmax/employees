import './App-filter.css'
import {AppFilterProps} from "./types";

export const AppFilter = (props: AppFilterProps) => {
    const {onFilterSelect, filter} = props
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'MoreThen500', label: 'З/п больше 500$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button onClick={()=> onFilterSelect(name)} key={name}
                className={`btn ${clazz}`}
                type='button'>{label}
            </button>
        )
    })

    return (
        <div className='btnGroup'>
            {buttons}
        </div>
    )
}