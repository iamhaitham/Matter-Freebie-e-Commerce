import { useState } from 'react';
import Star from '../Star';
import styles from './StarContainer.module.css';

function StarContainer({ numberOfStars }) {
    const [activeStars, setActiveStars] = useState(-1);
    const [clickedStar, setClickedStar] = useState(-1);
    const { starContainerStyles } = styles;
    let stars = [];

    function handleMouseIn(e, id) {
        setActiveStars(id);
    }

    function handleMouseOut(e, id) {
        setActiveStars(-1);
    }

    function handleClick(e, id) {
        setClickedStar(id);
    }

    function isStarActive(id) {
        return  id <= clickedStar || id <= activeStars;
    }

    function getAllStars() {
        for (let i = 0; i < numberOfStars; i++) {
            stars = [...stars, <Star key={ i } 
                                     id={ i } 
                                     handleMouseIn={ handleMouseIn }
                                     handleMouseOut={ handleMouseOut }
                                     handleClick={ handleClick }
                                     isStarActive={ isStarActive(i) }/>
                    ]
        }

        return stars;
    }

    return (
        <div className={ starContainerStyles }>
            { getAllStars() }
            <span>4.8 of 5</span>
        </div>
    )
}

export default StarContainer