 function ImageContainer(props) {
    const { children } = props;
    const imageContainerCss = `flex flex-wrap`;

    return (
        <div className={ imageContainerCss }>
            { children }
        </div>
    );
}

export default ImageContainer;