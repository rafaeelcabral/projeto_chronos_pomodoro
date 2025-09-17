import { Timer } from 'lucide-react';
import styles from './Logo.module.css';

/*type LogoProps= {
    children: React.ReactNode; 
}*/

function Logo(/*props: LogoProps*/) {

    return ( 

        <div className={styles.logo}> 
             
            <a href='#' className={styles.logoLink}>

                <Timer />

                <span> Chronos </span>

            </a>
            
        </div> 
        
    );

}

export { Logo };