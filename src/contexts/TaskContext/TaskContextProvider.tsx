import type { TaskStateModel } from "../../app/models/TaskStateModel";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer/taskReducer";
import { useEffect, useReducer } from "react";

//Definindo o estado inicial do Contexto
const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0, 
    formatedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0, 
    config: {workTime: 25, shortBreakTime: 5, longBreakTime: 15} 
};

type TaskContextProviderProps = {
    children: React.ReactNode;
}

function TaskContextProvider({children}: TaskContextProviderProps) {

    //Iniciando Reducer
    const [state, dispatch] = useReducer(taskReducer, initialState);

    //Monitorando o 'state' sempre q ele mudar
    useEffect(() => {

        console.log(state);

    }, [state]);

    return (

        <TaskContext.Provider value={{state: state, dispatch: dispatch}}>
            {children}
        </TaskContext.Provider>

    );

}

export { TaskContextProvider };