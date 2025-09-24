import { Home } from './pages/Home/Home';

import { TaskStateModel } from './app/models/TaskStateModel';
import { useState } from 'react';

import './global_theme.css';
import './global.css';

const initialState = new TaskStateModel( [], 0, '00:00', null, 0, {workTime: 25, shortBreakTime: 5, longBreakTime: 15} );

function App() {

    const[state, setState] = useState(initialState);

    console.log(state);

    return(

        <>

            <Home state={state} setState={setState} />

        </>

    );

}

export { App };