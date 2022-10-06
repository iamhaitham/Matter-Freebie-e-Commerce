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
        <div className={ getImageCss() }>
            <img src={ src } alt={ alt }/>
            { doesDescriptionExist() }
        </div>
    );
}

export default Image;