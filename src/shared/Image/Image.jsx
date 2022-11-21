function Image({ 
    id, 
    src,
    alt, 
    imageCss, 
    children, 
    handleClick 
}) {

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
            <img src={ src } 
                 alt={ alt } 
                 onClick={ handleClick ? (e) => handleClick(e) : undefined }/>
            { children }
        </div>
    );
}

export default Image;