import type { TaskModel } from '../../app/models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { useRef } from 'react';
import { DefaultInput } from '../DefaultInput/DefaultInput';
import { Cycles } from '../Cycles/Cycles';
import { DefaultButton } from '../DefautButton/DefaultButton';
import { PlayCircle, StopCircle } from 'lucide-react';
import styles from './MainForm.module.css';

function MainForm() {

    //Atribuindo o uso do contexto TaskContext a uma variável, permitindo q ela recupere(state) e altere(dispatch) os valores
    const taskContext = useTaskContext();

    //Recupera InputText
    const taskName = useRef<HTMLInputElement>(null);

    //Recupera o valor(1-8) do próximo Ciclo, passando o Ciclo atual por parâmetro
    const nextCycle = getNextCycle(taskContext.state.currentCycle);
    console.log(nextCycle);

    //Recupera o tipo do próximo Ciclo, passando o valor do próximo Ciclo por parâmetro
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
        taskContext.dispatch({type: 'START_TASK', payload: newTask});

    }

    //FUNÇÃO QUE INTERROMPE UMA TASK (OnClick)
    function handleInterruptTask() {

        //Alterando os valores do Contexto TaskContext por causa da interrupção da Task
        taskContext.dispatch({type: 'INTERRUPT_TASK', payload: taskContext.state.activeTask as TaskModel});

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
                    disabled={!!taskContext.state.activeTask} // o '!!' transforma o activeTask em 'true' ou 'false'
                />

            </div>

            <div className={styles.formRow}>

                <p> Nesse ciclo <b>foque</b> por <b>25 min.</b> </p>

            </div>

            {
                //Se o Ciclo Atual for maior doq 0, aparece os Ciclos na Tela
                (taskContext.state.currentCycle > 0) && (
                    <div className={styles.formRow}>

                        <Cycles/>

                    </div>
                )
            }

            {
                //Se não houver Task ativa, Botão tipo submit para iniciar uma task, se houver, Botão tipo button para parar a Task
                (taskContext.state.activeTask === null) ? (

                    <div className={styles.formRow}>

                        <DefaultButton 
                        key='Start New Task Button'
                        color='green'
                        type='submit'
                        arial-label='Iniciar uma nova Tarefa'
                        title='Iniciar uma nova Tarefa'
                        >

                            <PlayCircle/>

                        </DefaultButton>

                    </div> 

                ) : (

                    <div className={styles.formRow}>

                        <DefaultButton 
                        key='Interrupt Task Button'
                        color='red'
                        type='button'
                        onClick={handleInterruptTask}
                        arial-label='Interromper Tarefa'
                        title='Interromper Tarefa'
                        >

                            <StopCircle/>

                        </DefaultButton>

                    </div>     

                )
            }

        </form>

    );

}

export { MainForm };