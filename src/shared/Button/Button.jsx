import styles from './Button.module.css';

function Button(props) {
    const { customButtonCss, content, handleClick, id } = props; 
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