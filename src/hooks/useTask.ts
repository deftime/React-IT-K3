import {useEffect, useState} from "react";
import api from "../api/api";
import type {TaskType} from "../api/api";

export function useTask(boardId: string | null = null, taskId: string | null = null) {
    const [selectedTask, setSelectTask] = useState<TaskType | null>(null);

    useEffect(()=>{
        api.getTask(boardId, taskId).then(json => {
            setSelectTask(json.data)
        })
    }, [])

    return {
        current: selectedTask,
        refresh: (IDboard: string, IDtask: string): void => {
            setSelectTask(null);
            api.getTask(IDboard, IDtask).then(json => {
                setSelectTask(json.data)
            })
        },
        reset: (): void => {
            setSelectTask(null)
        }
    }

}