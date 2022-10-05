function Input(props) {
    const { type, placeholder, cssClass } = props;
    return (
        <input type={ type } placeholder={ placeholder } className={ cssClass }/>
    );
}

export default Input;