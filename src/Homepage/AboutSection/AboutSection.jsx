import Image from "../../shared/Image/Image";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Section from "../Section/Sections";
import UnorderedList from "../../shared/UnorderedList/UnorderedList";
import UnorderedListItem from "../../shared/UnorderedList/UnorderedListItem/UnorderedListItem";
import styles from './AboutSection.module.css';

function AboutSection() {
    const { imageStyles, detailsStyles, unorderedListStyles, aboutWrapperStyles } = styles;
    const sectionTitleContent = `About Matter`;
    const imageSrc = `/images/about-matter.png`;
    const imageCss = `${ imageStyles }`;
    const detailsCss = `${ detailsStyles }`;
    const unorderedListCss = `${ unorderedListStyles }`;
    const aboutWrapperCss = `${ aboutWrapperStyles }`;

    const coutnriesEntities = [
        { id: 1, name: 'India' },
        { id: 2, name: 'China' },
        { id: 3, name: 'Sri Lanka' }
    ];
    const countries = coutnriesEntities.map(entity => {
        const { id, name } = entity;

        return (
            <UnorderedListItem key={ id } name={ name }/>
        );
    });
    
    const matterTribesEntities = [
        { id: 1, name: '12 designers' },
        { id: 2, name: '12 Factories' }
    ];
    const matterTribes = matterTribesEntities.map(entity => {
        const { id, name } = entity;

        return (
            <UnorderedListItem key={ id } name={ name }/>
        );
    });

    return (
        <Section>
            <SectionTitle content={ sectionTitleContent }/>
            <div className={ aboutWrapperCss }>
                <Image src={ imageSrc } 
                       alt={ sectionTitleContent }
                       imageCss={ imageCss }/>
                <div className={ detailsCss }>
                    <p>Our mission is threefold - to foster designer-artisan collaborations, inspire consumers to value provenance and process, and pioneer industry change and sustainability for rural textile communities.</p>

                    <h4>Artisan Employment Days Created</h4>
                    <span>123456</span>

                    <h4>Countries Involved To Date</h4>

                    <UnorderedList customCss={ unorderedListCss }>
                        { countries }
                    </UnorderedList>

                    <h4>#MatterTribe</h4>

                    <UnorderedList customCss={ unorderedListCss }>
                        { matterTribes }
                    </UnorderedList>
                </div>
            </div>
        </Section>
    );
}

export default AboutSection;