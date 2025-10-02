import { useState, useEffect } from 'react';
import { House, History, Settings, Sun, Moon } from 'lucide-react';
import styles from './Menu.module.css';

type TemasDisponíveis = 'default' | 'light';

function Menu() {

    //useState Theme, iniciando com valor recuperado do LocalStorage
    const [theme, setTheme] = useState<TemasDisponíveis>(() => {

        const storageTheme = (localStorage.getItem('theme') != null) ? localStorage.getItem('theme') as TemasDisponíveis : 'default';

        return storageTheme;

    });

    //useEffect para setar o atributo 'theme' do HTML e inserir o valor no LocalStorage qndo o componente renderizar
    useEffect(() => {

        document.documentElement.setAttribute('theme', theme); //Efeito Colateral

        localStorage.setItem('theme', theme); //Efeito Colateral

    }, [theme]);

    //Função chamada no Button para alterar o valor de Theme
    function handleChangeTheme(event: React.MouseEvent<HTMLElement>) {

        //event => propriedade embutida na minha função pelo próprio navegador por causa do evento
        //event.preventDefault() => Impede que o link siga a função padrao de ir para outra página (href='#')
        event.preventDefault();

        setTheme((prevTheme) => {

            const nextTheme = (prevTheme === 'default') ? 'light' : 'default';

            return nextTheme;

        });

    }

    //Objeto usado para alterar o Icon do Button
    const nextIconTheme = {
        default: <Sun/>,
        light: <Moon/>
    }

    return ( 

        <nav className={styles.menu}>

            <a href='#' title='Home' className={styles.menuLink}> 
                <House />
            </a> 

            <a href='#' title='Histórico' className={styles.menuLink}> 
                <History />
            </a>

            <a href='#' title='Configurações' className={styles.menuLink}> 
                <Settings />
            </a>

            <a href='#' title='Mudar Tema' className={styles.menuLink} onClick={handleChangeTheme}> 
                {nextIconTheme[theme]}            
            </a> 

        </nav>
        
    );

}

export { Menu };