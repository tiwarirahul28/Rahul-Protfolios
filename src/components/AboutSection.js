import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import Avatar from '../assets/images/avatar.jpg'

const AboutSectionStyles = styled.div`
    padding: 100px 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .aboutsection__left,
    .aboutsection__right{
        flex: 1;
    }

    .section-title{
        text-align: left;
    }
    .para{
        margin-top: 20px;
        margin-left: 0px;
    }
    .aboutsection__buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        margin-top: 20px;
    }

    @media only screen and (max-width: 950px){
        .aboutsection__left{
            flex: 4;
        }

        .aboutsection__right{
            flex: 3;
        }
    }

    @media only screen and (max-width: 768px) {
        .container{
            flex-direction: column;
            text-align: center;
        }
        .aboutsection__left,
        .aboutsection__right{
            width: 100%;
        }
        .aboutsection__right{
            margin-top: 30px;
        }
        .section-title{
            text-align: center;
        }
        .para{
            margin: 0 auto;
            margin-top: 20px;
        }
        .aboutsection__buttons{
            flex-direction: column;
            gap: 0;

            .button-wrapper,
            a{
                width: 100%;
                text-align: center;
            }
        }
    }
`;


export default function AboutSection() {
    return (
        <AboutSectionStyles>
            <div className='container'>
                <div className='aboutsection__left'>
                    <SectionTitle className="section-title"
                        subheading='Let Me Introduce Myself'
                        heading='About Me'
                    />
                    <PText className="para">
                        I am a Front-End developer from
                        India. I create professional websites. I love art and always
                        try to show unique views to the audience through my design.
                    </PText>
                    <div className='aboutsection__buttons'>
                        <Button btnText='Works' btnLink='/projects'/>
                        <Button btnText='Read More' btnLink='/about' outline/>
                    </div>
                </div>
                <div className='aboutsection__right'>
                    <img src={Avatar} alt="images"/>
                </div>
            </div>
        </AboutSectionStyles>
    )
}
