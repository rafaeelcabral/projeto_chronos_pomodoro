import { Container } from './components/Container/Container';
import { Heading } from './components/Heading/Heading';
import { Timer } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

function App() {

    return(

        <>

            <Container>
                LOGO
            </Container>

            <Container>
                MENU
            </Container>

            <Container>

                <Heading>

                    TITULO 
                    
                    <button>
                        <Timer/>
                    </button>

                </Heading>

            </Container>

            <Container>
                FORM
            </Container>

            <Container>
                FOOTER
            </Container>
            
        </>

    );

}

export { App };