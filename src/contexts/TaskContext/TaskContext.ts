import type { TaskStateModel } from "../../app/models/TaskStateModel";
import type { TaskActionsType } from "./TaskReducer/taskActionsType";
import { createContext } from "react";

//Definindo tipo do Contexto
type TaskContextProps = {
    state: TaskStateModel,
    dispatch: React.Dispatch<TaskActionsType>;
};

//Definindo valor default pro Contexto
const initialContext: TaskContextProps = {

    state: {
        tasks: [],
        secondsRemaining: 0, 
        formatedSecondsRemaining: '00:00',
        activeTask: null,
        currentCycle: 0, 
        config: {workTime: 0, shortBreakTime: 0, longBreakTime: 0} 
    },

    dispatch: () => {}

};

//Criando o Contexto
const TaskContext = createContext<TaskContextProps>(initialContext);

export { TaskContext };