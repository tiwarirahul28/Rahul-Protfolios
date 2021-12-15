import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div `
    padding: 100px 0;

    .services__allItems{
        display: flex;
        gap: 100px;
        justify-content: space-between;
        margin-top: 50px;
    }

    @media only screen and (max-width: 768px) {
        .services__allItems {
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`

export default function ServicesSection() {
    return (
        <ServicesItemsStyles>
            <div className='container'>
                <SectionTitle
                    subheading='What i Will Do For You'
                    heading='Services'
                />
                <div className='services__allItems'>
                    <ServicesSectionItem
                        icon={<MdDesktopMac/>}
                        title='Web Design'
                        desc='I do ui/ux design for the website that helps website to get a unique look.'
                    />
                    <ServicesSectionItem
                        icon={<MdCode />}
                        title="Web Dev"
                        desc="I also develop the websites. I create high performance website with blazing fast speed."
                    />
                    <ServicesSectionItem
                        icon={<MdPhonelinkSetup />}
                        title="Software Testing"
                        desc="I Test application and verifying that a software product or application does what it is supposed to do."
                    />
                </div>
            </div>
        </ServicesItemsStyles>
    )
}
