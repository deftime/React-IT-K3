import './App.css'
import { useState } from "react";

//const tasks = null;
//const tasks = [];
const tasks = [
    {
        id: 1,
        title: "Buy some eats",
        isDone: true,
        addedAt: "01.09.2025",
        priority: 1
    },
    {
        id: 2,
        title: "Flow flowers",
        isDone: true,
        addedAt: "02.09.2025",
        priority: 2
    },
    {
        id: 3,
        title: "Go out",
        isDone: false,
        addedAt: "03.09.2025",
        priority: 3
    },
]

function App() {

    const [selected, setSelect] = useState(null);

    return (
        <div className={'toDoList main'}>
            <h1 className={'title h1'}>To Do List</h1>
            <div className={'list-box'}>
                {!tasks ? <span>Loading...</span> : undefined}
                {tasks && tasks.length === 0 ? <span>No tasks</span> : tasks?.map((task) => {
                    let select = task.id === selected;
                    return (
                        <div className={`${select ? "border" : ''} task task-` + task.priority} key={task.id}
                             onClick={()=>{
                                setSelect(task.id)
                             }}
                        >
                            <div className={'title line'}>
                                <span>Task: </span>
                                <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.title}</span>
                            </div>
                            <div className={'status line'}>
                                <span>Status: </span>
                                <input type="checkbox" disabled checked={task.isDone}/>
                            </div>
                            <div className={'date line'}>
                                <span>Date: </span>
                                <span>{task.addedAt}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="btn-reset" onClick={()=>{setSelect(null)}}>Reset</div>
        </div>
    )
}

export default App
