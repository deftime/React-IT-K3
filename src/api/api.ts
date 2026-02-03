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

export function getTasks(): Promise<{data: TaskType[]}> {
    return fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: {
            'api-key': '7125e182-3d06-4aff-82e8-ebec790f10eb' // Set key
        }
    }).then(res => res.json())
}

export function getTask(boardId: string, taskId: string): Promise<{data: TaskType}> {
    return fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
        headers: {
            'api-key': '7125e182-3d06-4aff-82e8-ebec790f10eb' // Set key
        }
    }).then(res => res.json())
}