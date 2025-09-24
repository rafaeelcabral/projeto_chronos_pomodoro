import { DefaultInput } from '../DefaultInput/DefaultInput';
import { Cycles } from '../Cycles/Cycles';
import { DefaultButton } from '../DefautButton/DefaultButton';
import { PlayCircle } from 'lucide-react';

import type { TaskStateModel } from '../../app/models/TaskStateModel';

import styles from './MainForm.module.css';


type MainFormProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
};

function MainForm({state}: MainFormProps) {

    return (
   
        <form className={styles.form}>

            <div className={styles.formRow}>

                <DefaultInput 
                    id='meuInput' 
                    name='meuInput' 
                    labelText='task:' 
                    type='text' 
                    placeholder='Ex.: Estudar para a prova'
                />

            </div>

            <div className={styles.formRow}>

                <p>Nesse ciclo <b>foque</b> por <b> {state.config.workTime} min </b></p>

            </div>

            <div className={styles.formRow}>

                <Cycles/>

            </div>

            <div className={styles.formRow}>

                <DefaultButton>

                    <PlayCircle/>
                    
                </DefaultButton>

            </div>

        </form>

    );

}

export { MainForm };