import Image from '../Image/Image';

function Icon({ 
    src, 
    alt, 
    iconCss, 
    handleClick 
}) {

    return (
        <Image src={ src } 
               alt={ alt } 
               imageCss={ iconCss }
               handleClick={ handleClick }/>
    );
}

export default Icon;