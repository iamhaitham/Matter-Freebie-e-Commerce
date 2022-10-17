function Size({ sizeCustomCss, size, id, handleClick }) {
  return (
    <div className={ sizeCustomCss }
         onClick={ (e) => handleClick(e, id) }>{ size }</div>
  );
}

export default Size