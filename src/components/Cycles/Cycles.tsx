import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './Cycles.module.css';

function Cycles() {

    //Importando TaskContext
    const taskContext = useTaskContext();

    //Criando um Array Dinâmico preenchido com 'null', cuja o tamanho acompanha a quantidade atual de Ciclos
    const cycleSteps = Array(taskContext.state.currentCycle).fill(null);

    //Criando Objeto que descreve qual Ciclo a bolinha representa
    const cycleDescription = {
        workTime: 'Foco',
        shortBreakTime: 'Descanso Curto',
        longBreakTime: 'Descanso Longo'
    };

    return (
    
        <div className={styles.cycleContainer}>

            <span> Ciclos: </span>

            <div className={styles.cyclePoints}>
                
                { 
                
                    //Usando .map() pra cada percorrer cada item do Array e Retornar a bolinha de acordo com o Ciclo Atual
                    //Usando nextCycle e nextCycleType por causa do Índice(index) q começa com '0' na 1ªposição;
                    cycleSteps.map((_, index) => {

                        const nextCycle = getNextCycle(index);

                        const nextCycleType = getNextCycleType(nextCycle);

                        return (
                            <span 
                                key={`${nextCycle}_${nextCycleType}`}
                                className={`${styles.cyclePoint} ${styles[nextCycleType]}`}
                                arial-label={`Indicador de Ciclo de ${cycleDescription[nextCycleType]}`}
                                title={`Indicador de Ciclo de ${cycleDescription[nextCycleType]}`}
                            >
                            </span>
                        );

                    })

                }

            </div>

        </div>

    );

}

export { Cycles };