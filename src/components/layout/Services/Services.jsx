import React from 'react'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesStyles';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help expedite your content creation</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help expedite your content creation</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help expedite your content creation</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
