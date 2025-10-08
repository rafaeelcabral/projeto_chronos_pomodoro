import type { TaskModel } from "../../../app/models/TaskModel"

type TaskActionsType = {
    type: 'START_TASK' | 'INTERRUPT_TASK' | 'RESET_STATE',
    payload: TaskModel
}

export type { TaskActionsType };

