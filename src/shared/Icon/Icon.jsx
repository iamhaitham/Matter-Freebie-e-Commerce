import Image from '../Image/Image';

function Icon(props) {
    const { src, alt, iconCss } = props;

    return (
        <Image src={ src } alt={ alt } imageCss={ iconCss }/>
    );
}

export default Icon;