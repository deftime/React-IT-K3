import clsx from 'clsx';
import cls from './scss/App.module.scss';
import loader from './img/loader.svg';
import {useEffect, useState} from "react";

function App() {

    const [selectedId, setSelectId] = useState(null);
    const [selectedTask, setSelectTask] = useState(null);
    const [tasks, setTasks] = useState(null);

    useEffect(()=>{
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': 'c54c1881-2ff2-421a-bc1e-98d829a16de3' // Set key
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
                return (<div className={clsx(cls.statusPlate, cls.todo)}>To Do</div>)
            case 1:
                return (<div className={clsx(cls.statusPlate, cls.progress)}>In progress</div>)
            case 2:
                return (<div className={clsx(cls.statusPlate, cls.done)}>Done</div>)
            case 3:
                return (<div className={cls.statusPlate}>Draft</div>)
        }
    }

    function selectTask(taskId, boardId) {
        setSelectId(taskId);

        fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
            headers: {
                'api-key': 'c54c1881-2ff2-421a-bc1e-98d829a16de3' // Set key
            }
        })
            .then(res => res.json())
            .then(json => {
                setSelectTask(json.data)
            })

        console.log(selectedTask);
    }

    return (
        <section className={cls.toDoList}>
            <h1 className={cls.mainTitle}>To Do List</h1>
            <div className={cls.inner}>
                <div className={cls.listBox}>
                    {!tasks && <img src={loader} alt="" className={cls.loader}/>}
                    {tasks && tasks.length === 0 ? <span>No tasks</span> : tasks?.map((task) => {
                        return (
                            <div className={clsx(cls.task, task.id === selectedId && cls.border, cls.task + task.priority)} key={task.id}
                                 onClick={()=>{
                                    setSelectTask(null)
                                    selectTask(task.id, task.attributes.boardId)
                                 }}
                            >
                                <div className={clsx(cls.name, cls.line)}>
                                    <span style={{ textDecoration: task.attributes.status >= 2 ? 'line-through' : 'none' }}>{task.attributes.title}</span>
                                </div>
                                <div className={clsx(cls.status, cls.line)}>
                                    <span>Status: </span>
                                    {getStatus(task.attributes.status)}
                                </div>
                                <div className={clsx(cls.data, cls.line)}>
                                    <span>Date: </span>
                                    <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={cls.taskInfo}>
                    {!selectedId && <div className={cls.noTask}>Select a task!</div>}
                    {selectedId && !selectedTask && <img src={loader} alt="" className={cls.loader}/>}
                    {selectedTask && <>
                        <div className={cls.top}>
                            <div className={cls.name}>{selectedTask.attributes.title}</div>
                            <div className={cls.datas}>
                                {getStatus(selectedTask.attributes.status)}
                                <div className={cls.date}>{new Date(selectedTask.attributes.addedAt).toLocaleDateString()}</div>
                            </div>
                        </div>
                        <div className={cls.desc}>{selectedTask.attributes.description ?? 'No description.'}</div>
                    </>}
                </div>
            </div>
            <div className={cls.btnReset} onClick={()=>{
                setSelectId(null)
                setSelectTask(null)
            }}>Reset</div>
        </section>
    )
}

export default App
