import { Heading } from './components/Heading';
import { Timer } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

function App() {

    const nome = 'Rafael';
    const sobrenome = 'Cabral';
    const frase = `Ola, ${nome} ${sobrenome}`;

    return(

        <>

            <Heading> 
                
                Olá Mundo 1 !

                <button>
                    <Timer/>
                </button>
                
            </Heading>

            <p>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minus commodi nisi delectus pariatur esse repellendus quaerat neque quo quis. Dolore cupiditate obcaecati tenetur porro doloremque consectetur corrupti asperiores et?

                <br/><br/>

                {frase}

            </p>
            
        </>

    );

}

export { App };