import Image from '../../shared/Image/Image';
import ImageContainer from '../../shared/ImageContainer/ImageContainer';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../../shared/Section/Section';
import Button from '../../shared/Button/Button';
import styles from './RecommendedVideosSection.module.css';

function RecommendedVideosSection() {
    const { buttonStyles, videoImageStyles, imageContainerStyles, recommendedVideosStyles, recommendedVideosSectionStyles, playVideoImageStyles } =  styles;
    const buttonCss = `bg-mid-grey grey-text ${ buttonStyles }`;

    const content = `Recommended Videos`;

    const playVideoImage = { src: '/images/play-video.png', alt: 'Play video icon' };
    const videosEntities = [
        { id: 1, description: 'Jamdani', src:'/images/recommended-video-1.png', alt:'Jamdani' },
        { id: 2, description: 'Lorem ipsum dolor sit amet', src:'/images/recommended-video-2.png', alt:'Lorem ipsum dolor sit amet' },
        { id: 3, description: 'Lorem ipsum dolor sit amet', src:'/images/recommended-video-3.png', alt:'Lorem ipsum dolor sit amet' }
    ];
    const videos = videosEntities.map(entity => {
        const { id, description, src, alt } = entity;

        return (
            <div key={ id } className={ recommendedVideosStyles }>
                <Image id={ id } 
                    src={ src } 
                    alt={ alt } 
                    imageCss={ videoImageStyles }>
                        <p>{ description }</p>
                        <Image src={ playVideoImage.src }
                               alt={ playVideoImage.alt }
                               imageCss={ playVideoImageStyles }/>
                </Image>
            </div>
        );
    });

    return (
        <Section customCss={ recommendedVideosSectionStyles }>
            <SectionTitle content={ content }/>
            <ImageContainer customCss={ imageContainerStyles }>
                { videos }
            </ImageContainer>
            <Button content='SHOW MORE' customButtonCss={ buttonCss }/>
        </Section>
    );
}

export default RecommendedVideosSection;