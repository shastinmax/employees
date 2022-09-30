import style from './App-info.module.sass'
import {AppInfoProps} from "./types";

export const AppInfo = (props: AppInfoProps) => {

    const {allEmployees, allIncrease} = props
    return (
        <div className={style.appInfo}>
            <h1>Учет сотрудников компании</h1>
            <h2>Общее количество сотрудников : {allEmployees}</h2>
            <h2>Премию получат : {allIncrease}</h2>
        </div>
    )
}