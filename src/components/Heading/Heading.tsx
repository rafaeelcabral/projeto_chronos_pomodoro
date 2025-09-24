import styles from './Heading.module.css';

//Tipando a Propriedade do Componente 'props' por causa do Ts
//Tudo q o React aceita como Children => React.ReactNode
type HeadingProps= {
    children: React.ReactNode; 
}

function Heading({children}: HeadingProps) {

    return ( 

        <h1 className={styles.heading}> 
            {children}
        </h1> 
        
    );

}

export { Heading };