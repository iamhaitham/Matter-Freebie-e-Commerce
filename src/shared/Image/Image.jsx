function Image(props) {
    const { id, src, alt, imageCss, description } = props;

    function doesDescriptionExist() {
        if (description) {
            return <p>{ description }</p>
        }
    }

    function getImageCss() {
        if (imageCss) {
            return `${imageCss}`;
        }   
    }

    function getId() {
        if (id) {
            return id;
        }
    }

    return (
        <div data-id={ getId() } className={ getImageCss() }>
            <img src={ src } alt={ alt }/>
            { doesDescriptionExist() }
        </div>
    );
}

export default Image;