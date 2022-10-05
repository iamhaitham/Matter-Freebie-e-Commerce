function Image(props) {
    const { src, alt, imageCss, description } = props;

    function doesDescriptionExist() {
        if (description) {
            return <p>{ description }</p>
        }
    }

    return (
        <div>
            <img src={ src } alt={ alt } className={ imageCss }/>
            { doesDescriptionExist() }
        </div>
    );
}

export default Image;