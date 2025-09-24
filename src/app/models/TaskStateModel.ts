import { TaskModel } from "./TaskModel";

class TaskStateModel {

    tasks: TaskModel[];

    secondsRemaining: number;

    formatedSecondsRemaining: string;

    activeTask: TaskModel | null;

    currentCycle: number; // 1 a 8
    
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };

    //---------------------------------------------------------------

    constructor(
    tasks: TaskModel[],
    secondsRemaining: number,
    formatedSecondsRemaining: string,
    activeTask: TaskModel | null,
    currentCycle: number,
    config = { workTime: 0, shortBreakTime: 0, longBreakTime: 0 }
    ) {
        this.tasks = tasks;
        this.secondsRemaining = secondsRemaining;
        this.formatedSecondsRemaining = formatedSecondsRemaining;
        this.activeTask = activeTask;
        this.currentCycle = currentCycle;
        this.config = config;
    }
}

export { TaskStateModel };
