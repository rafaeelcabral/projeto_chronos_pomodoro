import type { TaskStateModel } from "../../../app/models/TaskStateModel";
import type { TaskActionsType } from "./taskActionsType";
import { formatedSecondsRemaining } from "../../../utils/formatedSecondsRemainig";
import { getNextCycle } from "../../../utils/getNextCycle";

function taskReducer(state: TaskStateModel, action: TaskActionsType) {

    switch (action.type) {

        case 'START_TASK': {

            //Recupera valores da Nova Task passado pelo Payload
            const newTask = action.payload;

            //Recupera o valor(1-8) do próximo Ciclo, passando o Ciclo atual por parâmetro
            const nextCycle = getNextCycle(state.currentCycle);

            return {

                ... state,

                tasks: [... state.tasks, newTask],

                secondsRemaining: newTask.duration * 60, //em Segundos

                formatedSecondsRemaining: formatedSecondsRemaining(newTask.duration * 60),

                activeTask: newTask,

                currentCycle: nextCycle, 

                config: {... state.config}

            }

        }

        case 'INTERRUPT_TASK': {

            return {

                ... state,

                //Adicionando InterruptDate na Task q foi interrompida
                //Percorrendo o array com .map() e comparando o id das Tasks com o da Task Ativa pra saber onde inserir o InterruptDate
                tasks: state.tasks.map((task) => {

                    if((state.activeTask != null) && (state.activeTask.id === task.id)) {
                        return {
                            ...task,
                            interruptDate: Date.now()
                        }
                    }

                    return task;

                }),

                secondsRemaining: 0,

                formatedSecondsRemaining: '00:00',

                activeTask: null

            }
            
        }

        case "RESET_STATE": {
            return state;
        }

        default: {
            return state;
        }

    }

}

export { taskReducer };