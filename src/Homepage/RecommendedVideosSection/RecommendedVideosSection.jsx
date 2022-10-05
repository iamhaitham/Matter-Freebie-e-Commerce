import Image from '../../shared/Image/Image';
import ImageContainer from '../../shared/ImageContainer/ImageContainer';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../Section/Sections';
import Button from '../../shared/Button/Button';
import styles from './RecommendedVideosSection.module.css';

function RecommendedVideosSection() {
    const content = `Recommended Videos`;
    const videosEntities = [
        { id: 1, description: 'Jamdani', src:'', alt:'Jamdani' },
        { id: 2, description: 'Lorem ipsum dolor sit amet', src:'', alt:'Lorem ipsum dolor sit amet' },
        { id: 3, description: 'Lorem ipsum dolor sit amet', src:'', alt:'Lorem ipsum dolor sit amet' }
    ];
    const videos = videosEntities.map(entity => {
        const { id, description, src, alt } = entity;

        return (
            <Image key={ id } src={ src } alt={ alt } description={ description }/>
        );
    });

    const { buttonStyles } =  styles;
    const buttonCss = `bg-mid-grey grey-text ${ buttonStyles }`;

    return (
        <Section>
            <SectionTitle content={ content }/>
            <ImageContainer>
                { videos }
            </ImageContainer>
            <Button content='SHOW MORE' customButtonCss={ buttonCss }/>
        </Section>
    );
}

export default RecommendedVideosSection;