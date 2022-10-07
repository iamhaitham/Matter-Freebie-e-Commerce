import styles from './Article.module.css';

function Article(props) {
    const { id, title, content, time, image, style, articleWidth } = props;
    const { articleTitleStyle, articleTimeStyle, articleContentStyle, articleWrapperStyle } = styles;
    const articleWrapperCss = `${ articleWrapperStyle }`;

    function isImageIncluded() {
        if (image && style) {
            return (
                <img src={ image } 
                     alt={ title } 
                     style={ { width: style.width, height: style.height } }/>
            );
        }
    }

    return (
        <div data-index={ id } className={ articleWrapperCss } style={ { width: articleWidth } }>
            <p className={ articleTimeStyle }>{ time }</p>
            <h1 className={ articleTitleStyle }>{ title }</h1>
            <p className={ articleContentStyle }>{ content }</p>
            { isImageIncluded() }
        </div>
    );
}

export default Article;