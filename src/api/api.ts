export type TaskType = {
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

const api = {
    getTasks(): Promise<{data: TaskType[]}> {
        return fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY
            }
        }).then(res => res.json())
    },
    getTask(boardId: string | null, taskId: string | null): Promise<{data: TaskType}> {
        return fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY
            }
        }).then(res => res.json())
    }
}

export default api;