import {useEffect, useState} from "react";
import api from "../api/api";
import type {TaskType} from "../api/api";

export function useTaskList() {
    const [tasks, setTasks] = useState<TaskType[] | null>(null);

    useEffect(()=>{
        api.getTasks().then(json => {
            setTasks(json.data)
        })
    }, [])

    return {
        tasks
    }
}