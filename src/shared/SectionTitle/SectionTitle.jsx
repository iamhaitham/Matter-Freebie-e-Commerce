import styles from './SectionTitle.module.css';

function SectionTitle(props) {
    const { sectionTitle } = styles;
    const sectionTitleCss = `text-align-center ${ sectionTitle }`;
    const { content } = props;

    return (
        <h1 className={ sectionTitleCss }>{ content }</h1>
    );
}

export default SectionTitle;