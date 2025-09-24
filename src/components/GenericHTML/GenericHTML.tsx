import styles from './GenericHTML.module.css';

type GenericHTMLProps = {
    children: React.ReactNode;  
}

function GenericHTML({children}: GenericHTMLProps) {

    return (

        <div className={styles.genericHtml}>
            {children}
        </div>

    );

}

export { GenericHTML };