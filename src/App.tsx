import cls from './scss/App.module.scss';
import loader from './img/loader.svg';
import { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskDetails from "./components/TaskDetails";
import { getTask, getTasks } from "./api/api";
import type { TaskType } from "./api/api";

function App() {
    const [selectedId, setSelectId] = useState<string | null>(null);
    const [selectedTask, setSelectTask] = useState<TaskType | null>(null);
    const [tasks, setTasks] = useState<TaskType[] | null>(null);

    useEffect(()=>{
        getTasks().then(json => {
                setTasks(json.data)
            })
    }, [])

    function selectTask(taskId: string, boardId: string): void {
        setSelectTask(null);
        setSelectId(taskId);
        getTask(boardId, taskId).then(json => {
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
