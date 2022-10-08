function UnorderedList(props) {
    const { children, customCss } = props;

    return (
        <ul className={ customCss }>
            { children }
        </ul>
    );
}

export default UnorderedList;