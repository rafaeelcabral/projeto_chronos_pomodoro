import styles from './Cycles.module.css';

function Cycles() {

    return (
    
        <div className={styles.cycleContainer}>

            <span> Ciclos: </span>

            <div className={styles.cyclePoints}>

                <span className={`${styles.cyclePoint} ${styles.work}`}></span>
                <span className={`${styles.cyclePoint} ${styles.shortBreakTime}`}></span>

                <span className={`${styles.cyclePoint} ${styles.work}`}></span>
                <span className={`${styles.cyclePoint} ${styles.shortBreakTime}`}></span>

                <span className={`${styles.cyclePoint} ${styles.work}`}></span>
                <span className={`${styles.cyclePoint} ${styles.shortBreakTime}`}></span>

                <span className={`${styles.cyclePoint} ${styles.work}`}></span>
                <span className={`${styles.cyclePoint} ${styles.longBreakTime}`}></span>

            </div>

        </div>

    );

}

export { Cycles };