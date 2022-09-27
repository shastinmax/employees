import style from './App-info.module.sass'
export const AppInfo = ()=>{
    return (
        <div className={style.appInfo}>
            <h1>Учет сотрудников компании</h1>
            <h2>Общее количество сотрудников :</h2>
            <h2>Премию получат :</h2>
        </div>
    )
}