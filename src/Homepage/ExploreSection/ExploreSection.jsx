import Article from '../../shared/Article/Article';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../../shared/Section/Section';
import Button from '../../shared/Button/Button';
import styles from './ExploreSection.module.css';
import { articlesEntities } from '../../entities';

function ExploreSection() {
    const { articlesWrapperStyle, articlesThirdColumnStyle, buttonStyles, exploreSectionStyles } = styles;
    const buttonCss = `bg-mid-grey grey-text ${ buttonStyles }`;

    const exploreSectionTitle = `Explore`;
    
    const articles = articlesEntities.map(entity => {
        const { id, time, title, content, image, style, articleWidth } = entity;

        return (
            <Article key={ id } 
                     id={ id }
                     time={ time }
                     title={ title }
                     content={ content }
                     image={ image }
                     style={ style }
                     articleWidth={ articleWidth }/>
        );
    });

    return (
        <Section customCss={ exploreSectionStyles }>
            <SectionTitle content={ exploreSectionTitle }/>
            <div className={ articlesWrapperStyle }>
                { articles[0] }
                <div>
                    { articles[1] }
                    { articles[2] }
                </div>
                <div className={ articlesThirdColumnStyle }>
                    { articles[3] }
                    { articles[4] }
                </div>
            </div>
            <Button content='SEE THE JOURNAL' customButtonCss={ buttonCss }/>
        </Section>
    );
}

export default ExploreSection;