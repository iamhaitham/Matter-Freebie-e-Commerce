 function ImageContainer(props) {
    const { children, customCss } = props;
    const imageContainerCss = `flex flex-wrap`;

    function getImageContainerCss() {
        return !!customCss 
            ? `${ imageContainerCss } ${ customCss }`
            : `${ imageContainerCss }`;
    }

    return (
        <div className={ getImageContainerCss() }>
            { children }
        </div>
    );
}

export default ImageContainer;