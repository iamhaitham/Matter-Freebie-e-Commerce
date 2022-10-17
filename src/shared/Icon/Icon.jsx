import Image from '../Image/Image';

function Icon(props) {
    const { src, alt, iconCss, handleClick } = props;

    return (
        <Image src={ src } 
               alt={ alt } 
               imageCss={ iconCss }
               handleClick={ handleClick }/>
    );
}

export default Icon;