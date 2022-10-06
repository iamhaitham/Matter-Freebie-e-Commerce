function Image(props) {
    const { src, alt, imageCss, description } = props;

    function doesDescriptionExist() {
        if (description) {
            return <p>{ description }</p>
        }
    }

    function getImageCss() {
        if (!imageCss) {
            return;
        }
        
        return imageCss;
    }

    return (
        <div>
            <img src={ src } alt={ alt } className={ getImageCss() }/>
            { doesDescriptionExist() }
        </div>
    );
}

export default Image;