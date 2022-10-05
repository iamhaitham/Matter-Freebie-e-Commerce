import styles from './Button.module.css';

function Button(props) {
    const { customButtonCss, content } = props; 
    const { buttonStyles } = styles;
    const buttonCss = `${ buttonStyles } ${ customButtonCss }`;

    return(
        <button className={ buttonCss }>{ content }</button>
    );
}

export default Button;