import {SearchPanelProps} from "./types";

export const SearchPanel = (props: SearchPanelProps) => {
    const {onValueInput,term} = props
    return (
        <input className='form-control searchInput'
               type='text'
               placeholder='Найти сотрудника'
               value={term}
        onChange={(e)=>onValueInput(e.target.value)}/>
    )
}










