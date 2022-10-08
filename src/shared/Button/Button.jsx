import styles from './Button.module.css';

function Button(props) {
    const { customButtonCss, content } = props; 
    const { buttonStyles } = styles;

    function getButtonCss(){
        return !!customButtonCss 
            ? `${ buttonStyles } ${ customButtonCss }`
            : `${ buttonStyles }`;
    }

    return(
        <button className={ getButtonCss() }>{ content }</button>
    );
}

export default Button;