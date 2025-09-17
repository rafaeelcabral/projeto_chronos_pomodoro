import { House, History, Settings, Sun } from 'lucide-react';
import styles from './Menu.module.css';

/*type MenuProps= {
    children: React.ReactNode; 
}*/

function Menu(/*props: MenuProps*/) {

    return ( 

        <nav className={styles.menu}>

            <a href='#' className={styles.menuLink}> 
                <House />
            </a> 

            <a href='#' className={styles.menuLink}> 
                <History />
            </a>

            <a href='#' className={styles.menuLink}> 
                <Settings />
            </a>

            <a href='#' className={styles.menuLink}> 
                <Sun />            
            </a> 

        </nav>
        
    );

}

export { Menu };