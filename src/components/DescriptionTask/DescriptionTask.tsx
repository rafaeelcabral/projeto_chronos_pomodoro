import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

type DescriptionTaskProps = {
    nextCycle: number;
}

function DescriptionTask({nextCycle}: DescriptionTaskProps) {

    const taskContext = useTaskContext();

    return (
        
        <>
    
            {
                ((nextCycle % 2 != 0) && (taskContext.state.activeTask != null)) && (
                    <p><b>Descanse.</b></p>
                ) 
            }   

            {    
                ((nextCycle % 2 == 0) && (taskContext.state.activeTask != null)) && (
                    <p>Fique em <b>foco</b>.</p>
                )
            }

            {
                ((nextCycle % 2 != 0) && (taskContext.state.activeTask == null)) && (
                    <p>Nesse ciclo <b>foque</b> por <b>{taskContext.state.config.workTime} min.</b></p>
                )
            }

            {
                ((nextCycle % 2 == 0) && (nextCycle != 8) && (taskContext.state.activeTask == null)) && (
                    <p>Nesse ciclo <b>descanse</b> por <b>{taskContext.state.config.shortBreakTime} min.</b></p>
                )
            }

            {
                ((nextCycle == 8) && (taskContext.state.activeTask == null)) && (
                    <p>Nesse ciclo <b>descanse</b> por <b>{taskContext.state.config.longBreakTime} min.</b></p>
                )
            }

        </>

    );

}

export { DescriptionTask }