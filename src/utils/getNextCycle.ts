//Função que recupera qual é o Próximo Ciclo (de 0 => 1 // de 1 => 2, 2 => 3, ..., 8 => 1)
//É necessário saber qual o próximo ciclo antes de chamar a função que inicializa a Task
function getNextCycle(currentCycle: number) {
    return (currentCycle === 0 || currentCycle === 8) ? 1 : currentCycle += 1; 
}

export { getNextCycle };