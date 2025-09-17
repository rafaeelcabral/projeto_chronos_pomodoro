import styles from './DefaultInput.module.css';

type DefaultInputProps = {

    id: string,

    name: string,

    labelText?: string //Propriedade não obrigatória

} & React.ComponentProps<'input'>;


function DefaultInput({id, name, labelText, type, ...rest}: DefaultInputProps) {
    
    return (

        <>

            {

                /* Condição para se a propriedade labelText não vier, ele não adicionar a tag <label> */

                labelText ? (

                    <label htmlFor={id}> {labelText} </label>

                ) : (

                    ''

                )

            }

            <input className={styles.input} id={id} name={name} type={type} {...rest}></input>
        
        </>

    );

}

export { DefaultInput };