import styles from './Star.module.css';

function Star({ id, isStarActive, handleMouseIn, handleMouseOut, handleClick }) {
    const { starStyles } = styles;

    function getStarColor() {
        return isStarActive ? '#FF6008' : 'black' ;
    }

  return (
    <span className={ starStyles } 
          style={{ color: getStarColor() }}
          onMouseEnter={ (e) =>  handleMouseIn(e, id) }
          onMouseOut={ (e) => handleMouseOut(e, id) }
          onClick={ (e) => handleClick(e, id) }>★</span>
  )
}

export default Star;