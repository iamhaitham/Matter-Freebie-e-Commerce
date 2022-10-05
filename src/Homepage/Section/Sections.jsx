import styles from './Section.module.css';

function Section(props) {
    const { children, customCss } = props;
    const { marginBottom } = styles;
    const sectionWrapper = `flex-column align-items-center ${ marginBottom }`;
    const sectionCss = `${ customCss } ${ sectionWrapper }`;

    return (
      <div className={ sectionCss }>
        { children }
      </div>
    );
}

export default Section;