function Image(props) {
    const { id, src, alt, imageCss, children } = props;

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
            { children }
        </div>
    );
}

export default Image;