import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
    padding: 50px 0;
    .contactBanner__wrapper{
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 50px 0px;
        text-align: center;
    }
    .contactBanner__heading{
        font-size: 40px;
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 768px) {
        .contactBanner__heading {
            font-size: 26px;
        }
    }

`

export default function ContactBanner() {
    return (
        <ContactBannerStyles>
            <div className='container'>
                <div className='contactBanner__wrapper'>
                    <PText>Have a Project in Mind</PText>
                    <h3 className='contactBanner__heading'>Let Me Help You</h3>
                    <Button btnText='Contact Now' btnLink='/contact'/>
                </div>
            </div>
        </ContactBannerStyles>
    )
}
