import Section from '../components/Section';
import Heading from '../components/Heading';

export default function ContextoExemplo() {
    return (
        <div>
            <h2>Exemplo utilizando Context API</h2>
            <div>
                <Section>
                    <Heading>Title</Heading>
                    <Section>
                        <Heading >Heading</Heading>
                        <Heading>Heading</Heading>
                        <Heading>Heading</Heading>
                        <Section>
                            <Heading>Sub-heading</Heading>
                            <Heading>Sub-heading</Heading>
                            <Heading>Sub-heading</Heading>
                            <Section>
                                <Heading>Sub-sub-heading</Heading>
                                <Heading>Sub-sub-heading</Heading>
                                <Heading>Sub-sub-heading</Heading>
                            </Section>
                        </Section>
                    </Section>
                </Section>
            </div>
        </div>
    )
}