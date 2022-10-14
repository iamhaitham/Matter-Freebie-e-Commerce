import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../../shared/Section/Section';
import Image from '../../shared/Image/Image';

function ClientsSection() {
    const content = `As Seen On`;

    return (
      <Section>
        <SectionTitle content={ content }/>
        <Image src='/images/as-seen-on.png' alt='clients'/>
      </Section>
    );
}

export default ClientsSection;