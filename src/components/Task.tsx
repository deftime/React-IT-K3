import clsx from 'clsx';
import cls from '../scss/Task.module.scss';
import StatusPlate from "./StatusPlate";

function Task(props) {

    return (
        <div className={clsx(cls.task, props.isSelect && cls.border, cls.task + props.priority)}
             onClick={()=>{
                 //setSelectTask(null)
                 props.onSelect(props.id, props.boardId)
             }}
        >
            <div className={clsx(cls.name, cls.line)}>
                <span style={{ textDecoration: props.status >= 2 ? 'line-through' : 'none' }}>{props.title}</span>
            </div>
            <div className={clsx(cls.status, cls.line)}>
                <span>Status: </span>
                <StatusPlate status={props.status} />
            </div>
            <div className={clsx('date', cls.line)}>
                <span>Date: </span>
                <span>{new Date(props.date).toLocaleDateString()}</span>
            </div>
        </div>
    )
}

export default Task