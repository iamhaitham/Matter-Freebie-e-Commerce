import styles from './Section.module.css';

function Section(props) {
    const { children, customCss } = props;
    const { marginBottom } = styles;
    const sectionWrapper = `flex-column align-items-center ${ marginBottom }`;

  function getSectionCss() {
    return !!customCss 
    ? `${ customCss } ${ sectionWrapper }`
    : `${ sectionWrapper }`;
  }    

    return (
      <div className={ getSectionCss() }>
        { children }
      </div>
    );
}

export default Section;