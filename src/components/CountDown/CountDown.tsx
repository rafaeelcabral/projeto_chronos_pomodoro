import styles from './CountDown.module.css';

/*type CountDownProps= {
    children: React.ReactNode; 
}*/

function CountDown(/*props: CountDownProps*/) {

    return ( 

        <div className={styles.countDown}>
            00:00
        </div>
        
    );

}

export { CountDown };