import  './App-filter.css'

export const AppFilter = () => {
    return (
        <div className='btnGroup'>
            <button
                className='btn btn-light'
                type='button'>Все сотрудники
            </button>
            <button
                className='btn btn-outline-light'
                type='button'>На повышение
            </button>
            <button
                className='btn btn-outline-light'
                type='button'>З/п больше 1000$
            </button>
        </div>
    )
}