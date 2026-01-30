import cls from "../scss/TaskDetails.module.scss";
import loader from "../img/loader.svg";
import StatusPlate from "./StatusPlate";

type PropsType = {
    title: string | undefined
    status: number | undefined
    date: string | undefined
    description: string | undefined
    isLoading: string | boolean | null
    noData: boolean
}

function TaskDetails(props: PropsType) {
    return (
        <div className={cls.taskInfo}>
            {props.noData && <div className={cls.noTask}>Select a task!</div>}
            {props.isLoading && <img src={loader} alt="" className={'loader'}/>}
            {!props.noData && !props.isLoading && <>
                <div className={cls.top}>
                    <div className={cls.name}>{props.title}</div>
                    <div className={cls.datas}>
                        <StatusPlate status={props.status} styleVar={'inDetails'} />
                        <div className={cls.date}>{new Date(props.date ?? '').toLocaleDateString()}</div>
                    </div>
                </div>
                <div className={cls.desc}>{props.description ?? 'No description!'}</div>
            </>}
        </div>
    )
}

export default TaskDetails