import styles from './DefaultButton.module.css';

type DefaultButtonProps = {

    children: React.ReactNode,

    color?: 'green' | 'red'

} & React.ComponentProps<'button'>;

function DefaultButton({children, color='green', ...rest}: DefaultButtonProps) {

    return( 

        <>
        
            <button className={`${styles.button} ${styles[color]}`} {...rest}>

                {children}

            </button>
        
        </>

    );

}

export { DefaultButton };