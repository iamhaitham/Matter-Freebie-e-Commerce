import Article from '../../shared/Article/Article';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../Section/Sections';
import Button from '../../shared/Button/Button';
import styles from './ExploreSection.module.css';

function ExploreSection() {
    const { articlesWrapperStyle, articlesThirdColumnStyle, buttonStyles } = styles;
    const buttonCss = `bg-mid-grey grey-text ${ buttonStyles }`;

    const exploreSectionTitle = `Explore`;
    const articlesEntities = [
        { id: 1, articleWidth: '33rem', time: 'FIELDTESTED · JANUARY 19, 2017', title: 'Connected Clothing: Raye Padit', content: 'As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls.', image: '/images/connected-clothing-article.png', style: { width: '33rem', height: '20rem' } },
        { id: 2, articleWidth: '16rem', time: 'FIELDTESTED · JANUARY 19, 2017', title: 'Kérastase: A Collaboration', image: '/images/kerastase-a-collaboration.png', style: { width: '16rem', height: '8rem' } },
        { id: 3, articleWidth: '16rem', time: 'FIELDTESTED · JANUARY 19, 2017', title: 'Remarkable Resilience: Grace Kim', content: 'A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.' },
        { id: 4, articleWidth: '18rem', time: 'FIELDTESTED · JANUARY 19, 2017', title: 'Jaclynn Seah', content: 'Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.' },
        { id: 5, articleWidth: '18rem', time: 'FIELDTESTED · JANUARY 19, 2017', title: 'How To Wear The Lounge Lunghi', image: '/images/how-to-wear-the-lounge-lunghi.png', style: { width: '18rem', height: '8rem' } }
    ];
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
        <Section>
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