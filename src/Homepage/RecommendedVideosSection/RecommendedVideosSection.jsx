import Image from '../../shared/Image/Image';
import ImageContainer from '../../shared/ImageContainer/ImageContainer';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../Section/Sections';
import Button from '../../shared/Button/Button';
import styles from './RecommendedVideosSection.module.css';

function RecommendedVideosSection() {
    const { buttonStyles, videoImageStyles, imageContainerStyles, recommendedVideosSectionStyles } =  styles;
    const buttonCss = `bg-mid-grey grey-text ${ buttonStyles }`;

    const content = `Recommended Videos`;
    const videosEntities = [
        { id: 1, description: 'Jamdani', src:'/images/recommended-video-1.png', alt:'Jamdani' },
        { id: 2, description: 'Lorem ipsum dolor sit amet', src:'/images/recommended-video-2.png', alt:'Lorem ipsum dolor sit amet' },
        { id: 3, description: 'Lorem ipsum dolor sit amet', src:'/images/recommended-video-3.png', alt:'Lorem ipsum dolor sit amet' }
    ];
    const videos = videosEntities.map(entity => {
        const { id, description, src, alt } = entity;

        return (
            <div className={ recommendedVideosSectionStyles }>
                <Image key={ id } 
                    src={ src } 
                    alt={ alt } 
                    imageCss={ videoImageStyles }/>
                <p>{ description }</p>
            </div>
        );
    });

    return (
        <Section>
            <SectionTitle content={ content }/>
            <ImageContainer customCss={ imageContainerStyles }>
                { videos }
            </ImageContainer>
            <Button content='SHOW MORE' customButtonCss={ buttonCss }/>
        </Section>
    );
}

export default RecommendedVideosSection;