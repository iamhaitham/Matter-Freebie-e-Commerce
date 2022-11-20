import styles from './Button.module.css';

function Button({ 
    customButtonCss, 
    content, 
    handleClick, 
    id 
}) {
    const { buttonStyles } = styles;

    function getButtonCss(){
        return !!customButtonCss 
            ? `${ buttonStyles } ${ customButtonCss }`
            : `${ buttonStyles }`;
    }

    return(
        <button className={ getButtonCss() }
                onClick={ handleClick ? (e) => handleClick(e, id) : undefined }>{ content }</button>
    );
}

export default Button;