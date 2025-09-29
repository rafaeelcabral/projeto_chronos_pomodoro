type TaskModel = {

    id: string;

    name: string;

    duration: number;

    startDate: number;

    completeDate?: number;   // opcional

    interruptDate?: number;  // opcional
    
    type: 'workTime' | 'shortBreakTime' | 'longBreakTime';

};

export type { TaskModel };
