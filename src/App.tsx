import cls from './scss/App.module.scss';
import loader from './img/loader.svg';
import {useEffect, useState} from "react";
import Task from "./components/Task";
import TaskDetails from "./components/TaskDetails";

type TaskType = {
    id: string
    attributes: {
        title: string
        status: number
        addedAt: string
        description: string
        boardId: string
        priority: number
    }
}

function App() {
    const [selectedId, setSelectId] = useState<string | null>(null);
    const [selectedTask, setSelectTask] = useState<TaskType | null>(null);
    const [tasks, setTasks] = useState<TaskType[] | null>(null);

    useEffect(()=>{
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': '7125e182-3d06-4aff-82e8-ebec790f10eb' // Set key
            }
        })
            .then(res => res.json())
            .then(json => {
                setTasks(json.data)
            })
    }, [])

    function selectTask(taskId: string, boardId: string): void {
        setSelectTask(null);
        setSelectId(taskId);

        fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
            headers: {
                'api-key': '7125e182-3d06-4aff-82e8-ebec790f10eb' // Set key
            }
        })
            .then(res => res.json())
            .then(json => {
                setSelectTask(json.data)
            })
    }

    return (
        <section className={cls.toDoList}>
            <h1 className={cls.mainTitle}>To Do List</h1>
            <div className={cls.inner}>
                <div className={cls.listBox}>
                    {!tasks && <img src={loader} alt="" className={'loader'}/>}
                    {tasks && tasks.length === 0 ? <span>No tasks</span> : tasks?.map((task) => {
                        return <Task key={task.id}
                                     id={task.id}
                                     boardId={task.attributes.boardId}
                                     priority={task.attributes.priority}
                                     status={task.attributes.status}
                                     title={task.attributes.title}
                                     date={task.attributes.addedAt}
                                     isSelect={task.id === selectedId}
                                     onSelect={selectTask}
                                />
                    })}
                </div>
                <TaskDetails title={selectedTask?.attributes.title}
                             status={selectedTask?.attributes.status}
                             date={selectedTask?.attributes.addedAt}
                             description={selectedTask?.attributes.description}
                             isLoading={selectedId && !selectedTask}
                             noData={!selectedId}
                />
            </div>
            <div className={cls.btnReset} onClick={()=>{
                setSelectId(null)
                setSelectTask(null)
            }}>Reset</div>
        </section>
    )
}

export default App
