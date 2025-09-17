import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';
import { CountDown } from './components/CountDown/CountDown';
import { DefaultInput } from './components/DefaultInput/DefaultInput';
import { Cycles } from './components/Cycles/Cycles'
import { DefaultButton } from './components/DefautButton/DefaultButton';
import { PlayCircle } from 'lucide-react';
import { Footer } from './components/Footer/Footer';

import './styles/theme.css';
import './styles/global.css';

function App() {

    return(

        <>

            <Container>
                
                <Logo/>

            </Container>

            <Container>
                
                <Menu/>

            </Container>

            <Container>
                
                <CountDown/>

            </Container>

            <Container>
                
                <form className='Form'>

                    <div className='FormRow'>

                        <DefaultInput 
                            id='meuInput' 
                            name='meuInput' 
                            labelText='task:' 
                            type='text' 
                            placeholder='Ex.: Estudar para a prova'
                        />

                    </div>

                    <div className='FormRow'>

                        <p>Nesse ciclo <b>foque</b> por <b>25 min.</b></p>

                    </div>

                    <div className='FormRow'>

                        <Cycles/>

                    </div>

                    <div className='FormRow'>

                        <DefaultButton>

                            <PlayCircle/>
                            
                        </DefaultButton>

                    </div>

                </form>

            </Container>

            <Container>
                
                <Footer/>

            </Container>

        </>

    );

}

export { App };