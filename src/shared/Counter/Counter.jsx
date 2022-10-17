import Size from '../Size/Size';
import styles from './Counter.module.css';

function Counter({ count, handleIncreaseClick, handleDecreaseClick }) {
    const { counterButtonStyles, counterStyles, counterWrapperStyles } = styles;

  return (
    <div className={ counterWrapperStyles }>
        <Size sizeCustomCss={ counterButtonStyles } 
              size='-'
              handleClick={ handleDecreaseClick }/>
        <Size sizeCustomCss={ counterStyles } 
              size={ count }/>
        <Size sizeCustomCss={ counterButtonStyles } 
              size='+'
              handleClick={ handleIncreaseClick }/>
    </div>
  )
}

export default Counter;