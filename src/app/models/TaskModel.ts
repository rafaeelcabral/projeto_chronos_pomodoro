class TaskModel {

    id: string;

    name: string;

    duration: number;

    startDate: number;

    completeDate?: number;   // opcional

    interruptDate?: number;  // opcional
    
    type: 'workTime' | 'shortBreakTime' | 'longBreakTime';

    //---------------------------------------------------------------

    constructor(
    id: string,
    name: string,
    duration: number,
    startDate: number,
    type: 'workTime' | 'shortBreakTime' | 'longBreakTime',
    completeDate?: number,
    interruptDate?: number
    ) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.startDate = startDate;
        this.type = type;
        this.completeDate = completeDate;
        this.interruptDate = interruptDate;
    }

}

export { TaskModel };
