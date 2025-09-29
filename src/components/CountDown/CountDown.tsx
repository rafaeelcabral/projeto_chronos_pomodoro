import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './CountDown.module.css';

function CountDown() {

    const taskContext = useTaskContext();

    return ( 

        <div className={styles.countDown}>
            {taskContext.state.formatedSecondsRemaining}
        </div>
        
    );

}

export { CountDown };