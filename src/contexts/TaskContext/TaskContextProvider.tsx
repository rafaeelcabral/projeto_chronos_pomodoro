import type { TaskStateModel } from "../../app/models/TaskStateModel";
import { TaskContext } from "./TaskContext";
import { useState } from "react";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

//Definindo o estado inicial do Contexto
const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0, 
    formatedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0, 
    config: {workTime: 25, shortBreakTime: 5, longBreakTime: 15} 
};

function TaskContextProvider({children}: TaskContextProviderProps) {

    const [state, setState] = useState(initialState);

    return (

        <TaskContext.Provider value={{state: state, setState: setState}}>
            {children}
        </TaskContext.Provider>

    );

}

export { TaskContextProvider };