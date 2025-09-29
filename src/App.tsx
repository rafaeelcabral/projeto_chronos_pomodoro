import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import { Home } from './pages/Home/Home';

import './global_theme.css';
import './global.css';

function App() {

    return(

        <>

            <TaskContextProvider>
                <Home />
            </TaskContextProvider>

        </>

    );

}

export { App };