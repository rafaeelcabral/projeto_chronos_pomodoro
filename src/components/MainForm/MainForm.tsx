import type { TaskModel } from '../../app/models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useRef } from 'react';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatedSecondsRemaining } from '../../utils/formatedSecondsRemainig';
import { DefaultInput } from '../DefaultInput/DefaultInput';
import { Cycles } from '../Cycles/Cycles';
import { DefaultButton } from '../DefautButton/DefaultButton';
import { PlayCircle } from 'lucide-react';
import styles from './MainForm.module.css';

function MainForm() {

    //Atribuindo o uso do contexto TaskContext a uma variável, permitindo q ela recupere(state) e altere(setState) os valores
    const taskContext = useTaskContext();

    //Recupera InputText
    const taskName = useRef<HTMLInputElement>(null);

    //Recupera o valor(1-8) do próximo Ciclo, passando o Ciclo atual por parâmetro
    const nextCycle = getNextCycle(taskContext.state.currentCycle);
    console.log(nextCycle);

    //Recupera o tipo do próximo Ciclo, passando o próximo Ciclo por parâmetro
    const nextCycleType = getNextCycleType(nextCycle);
    console.log(nextCycleType);

    //FUNÇÃO QUE INICIALIZA UMA NOVA TASK (OnSubmit)
    function handleStartNewTask(event: React.FormEvent<HTMLFormElement>) {

        //event => propriedade embutida na minha função pelo próprio navegador por causa do evento
        //event.preventDefault() => Impede que o link siga a função padrao de ir para outra página (href='#')
        event.preventDefault();

        //Verifica se o InputText foi preenchido, se não foi retorna (não inicia a Task);
        if (taskName.current === null) { return }; 
        
        //Verifica se o valor do InputText está vazio, se estiver emite alerta e retorna (não inicia a Task);
        if (taskName.current.value.trim() === '') { 
            alert('Digite o Nome da Task !');
            return 
        };

        //Atribuindo a uma nova variável o valor do InputText
        const nomeDaTask = taskName.current.value.trim();

        //Criando uma Nova Task (Objeto do tipo TaskModel)
        const newTask: TaskModel = {

            id: Date.now().toString(),

            name: nomeDaTask,

            duration: taskContext.state.config[nextCycleType], //em Minutos

            startDate: Date.now(),

            completeDate: null,

            interruptDate: null,

            type: nextCycleType

        }

        //Alterando os valores do Contexto TaskContext por causa da nova Task
        taskContext.setState((prevState) => {

            return {

                ... prevState,

                tasks: [... prevState.tasks, newTask],

                secondsRemaining: newTask.duration * 60, //em Segundos

                formatedSecondsRemaining: formatedSecondsRemaining(newTask.duration * 60),

                activeTask: newTask,

                currentCycle: nextCycle, 

                config: {... prevState.config}

            }

        });

    }

    return (
   
        <form className={styles.form} onSubmit={handleStartNewTask}>

            <div className={styles.formRow}>

                <DefaultInput 
                    id='meuInput' 
                    name='meuInput' 
                    labelText='task:' 
                    type='text' 
                    placeholder='Ex.: Estudar para a prova'
                    ref={taskName}
                />

            </div>

            <div className={styles.formRow}>

                <p> Nesse ciclo <b>foque</b> por <b>25 min.</b> </p>

            </div>

            <div className={styles.formRow}>

                <Cycles/>

            </div>

            <div className={styles.formRow}>

                <DefaultButton color='green'>
                    <PlayCircle/>
                </DefaultButton>

            </div>

        </form>

    );

}

export { MainForm };