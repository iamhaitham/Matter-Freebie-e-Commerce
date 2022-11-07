import Image from '../../shared/Image/Image';
import Section from '../../shared/Section/Section';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import styles from './CurrentListingSection.module.css';

function CurrentListingSection({ currentListingTitle }) {
    const { currentListingSectionStyles } = styles;

    return (
        <Section customCss={ currentListingSectionStyles }>
            <div>
                <SectionTitle content={ currentListingTitle }/>
                <p>White Gold began gaining popularity in the early 1900's as an alternative to platinum. </p>
            </div>
            <Image src='/images/featured-5.png' alt='featured-5'/>
        </Section>
    )
}

export default CurrentListingSection;