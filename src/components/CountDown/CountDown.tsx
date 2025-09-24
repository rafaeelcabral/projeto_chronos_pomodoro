import type { TaskStateModel } from '../../app/models/TaskStateModel';

import styles from './CountDown.module.css';

type CountDownProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
};

function CountDown({state}: CountDownProps) {

    return ( 

        <div className={styles.countDown}>
            {state.formatedSecondsRemaining}
        </div>
        
    );

}

export { CountDown };