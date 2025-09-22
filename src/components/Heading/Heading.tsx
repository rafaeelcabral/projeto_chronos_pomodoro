import { Trash2 } from 'lucide-react';

import styles from './Heading.module.css';

//Tipando a Propriedade do Componente 'props' por causa do Ts
//Tudo q o React aceita como Children => React.ReactNode
/*type HeadingProps= {
    children: React.ReactNode; 
}*/

function Heading(/*props: HeadingProps*/) {

    return ( 

        <h2 className={styles.heading}> 
            Titulo 
            <button> 
                <Trash2 />
            </button>
        </h2> 
        
    );

}

export { Heading };