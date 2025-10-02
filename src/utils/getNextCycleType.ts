//Função que retorna o tipo da Task de acordo com o Current Cycle
function getNextCycleType(currentCycle: number): 'longBreakTime' | 'shortBreakTime' | 'workTime' {
    if(currentCycle === 8) {
        return 'longBreakTime';
    } else if (currentCycle % 2 === 0) {
        return 'shortBreakTime';
    } else {
        return 'workTime';
    }
}

export { getNextCycleType };