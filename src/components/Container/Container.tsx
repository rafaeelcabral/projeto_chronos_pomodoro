import styles from './Container.module.css';

type ContainerProps = {
    children: React.ReactNode;
};

function Container(props: ContainerProps) {

    return (

        <>

            <div className={styles.container}>

                <div className={styles.content}>

                    {props.children}
                    
                </div>   

            </div>
        
        </>

    );

}

export { Container };