import styles from './Heading.module.css';

//Tipando a Propriedade do Componente 'props' por causa do Ts
//Tudo q o React aceita como Children => React.ReactNode
type HeadingProps= {
    children: React.ReactNode; 
}

function Heading(props: HeadingProps) {

    return ( 

        <h1 className={styles.heading}> 
            {props.children} 
        </h1> 
        
    );

}

export { Heading };