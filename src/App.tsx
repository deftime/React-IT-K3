import clsx from 'clsx';
import cls from './scss/App.module.scss';
import loader from './img/loader.svg';
import {useEffect, useState} from "react";

function App() {

    const [selected, setSelect] = useState(null);
    const [tasks, setTasks] = useState(null);

    useEffect(()=>{
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': '***' // Set key
            }
        })
            .then(res => res.json())
            .then(json => {
                setTasks(json.data)
            })
    }, [])

    function getStatus(status) {
        switch (status) {
            case 0:
                return (<div className={clsx(cls.plate, cls.todo)}>To Do</div>)
            case 1:
                return (<div className={clsx(cls.plate, cls.progress)}>In progress</div>)
            case 2:
                return (<div className={clsx(cls.plate, cls.done)}>Done</div>)
            case 3:
                return (<div className={cls.plate}>Draft</div>)
        }
    }

    return (
        <section className={cls.toDoList}>
            <h1 className={cls.mainTitle}>To Do List</h1>
            <div className={cls.listBox}>
                {!tasks ? <img src={loader} alt="" className={cls.loader}/> : undefined}
                {tasks && tasks.length === 0 ? <span>No tasks</span> : tasks?.map((task) => {
                    let select = task.id === selected;
                    return (
                        <div className={clsx(cls.task, select && cls.border, cls.task + task.priority)} key={task.id}
                             onClick={()=>{
                                setSelect(task.id)
                             }}
                        >
                            <div className={clsx(cls.name, cls.line)}>
                                <span style={{ textDecoration: task.attributes.status >= 2 ? 'line-through' : 'none' }}>{task.attributes.title}</span>
                            </div>
                            <div className={clsx(cls.status, cls.line)}>
                                <span>Status: </span>
                                <div className={cls.statusBox}>
                                    {getStatus(task.attributes.status)}
                                </div>
                            </div>
                            <div className={clsx(cls.data, cls.line)}>
                                <span>Date: </span>
                                <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={cls.btnReset} onClick={()=>{setSelect(null)}}>Reset</div>
        </section>
    )
}

export default App
