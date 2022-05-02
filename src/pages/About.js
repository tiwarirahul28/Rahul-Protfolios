import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import rahul from '../assets/images/rahul.jpeg'

const AboutPageStyles = styled.div`
    padding: 200px 0 100px 0;
    .top-section{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .left{
        flex: 3;
    }
    .right{
        flex: 2;
    }
    .about__subheading{
        font-size: 22px;
        margin-bottom: 20px;

        span{
            background-color: var(--deep-dark);
            padding: 8px;
            border-radius: 8px;
        }
    }
    .about__heading{
        font-size: 36px;
        margin-bottom: 30px;
    }
    .about__info{
        margin-bottom: 40px;
        .para{
            width: 100%;
            margin-left: 0px;
        }
    }
    .right {
        img {
            border: 2px solid var(--gray-1);
        }
    }
    .about__info__items{
        margin-top: 150px;
    }
    .about__info__item{
        margin-bottom: 100px;
    }
    .about__info__heading{
        font-size: 36px;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px) {
        padding: 100px 0;
        .top-section{
            flex-direction: column;
            gap: 50px;
        }
        .about__subheading {
            font-size: 18px;
        }
        .about__heading {
            font-size: 24px;
        }
        .about__info__heading {
            font-size: 26px;
        }
    }
`

export default function About() {
    return (
        <AboutPageStyles>
            <div className='container'>
                <div className='top-section'>
                    <div className='left'>
                        <p className='about__subheading'>
                            Hi i am <span>Rahul Tiwari</span>
                        </p>
                        <h2 className='about__heading'>A Front-End Web Developer</h2>
                        <div className='about__info'>
                            <PText>
                                I am from India. A place of beauty and
                                nature. Since my childhood, i love art and design. I always
                                try to design stuff with my unique point of view. I also love
                                to create things that can be usefull to others.
                                <br /> <br />
                                I started coding since I was in high school. Coding is also an
                                art for me. I love it and now I have the opportunity to design
                                along with the coding. I find it really interesting and I
                                enjoyed the process a lot.
                                <br />
                                <br />
                                My vision is to make the world a better place. Now almost
                                everything is becoming better than ever. It is time for us to
                                create more good stuff that helps the world to become a better
                                place.
                            </PText>
                        </div>
                        <Button btnText='DownLoad CV' btnLink='#'/>
                    </div>
                    <div className='right'>
                        <img src={rahul} alt="me"/>
                    </div>
                </div>
                <div className='about__info__items'>
                    <div className='about__info__item'>
                        <h1 className='about__info__heading'>Education</h1>
                        <AboutInfoItem
                            title='School'
                            items={["Saraswati Mandir High School, Maharashtra"]}
                        />
                        <AboutInfoItem
                            title='Collage'
                            items={["Lokmanya Vidya Mandir college, Maharashtra"]}
                        />
                        <AboutInfoItem
                            title='University'
                            items={["Mumbai University, Maharashtra"]}
                        />
                    </div>
                    <div className='about__info__item'>
                        <h1 className='about__info__heading'>My Skill</h1>
                        <AboutInfoItem
                            title='FrontEnd'
                            items={['HTML, CSS, JavaScript, React Js']}
                        />
                        {/* <AboutInfoItem
                            title='BackEnd'
                            items={['Node JS']}
                        /> */}
                        {/* <AboutInfoItem
                            title='University'
                            items={["Mumbai University, Maharashtra"]}
                        /> */}
                    </div>
                    <div className='about__info__item'>
                        <h1 className='about__info__heading'>EXPERIENCES</h1>
                        <AboutInfoItem
                            title='2021 -'
                            items={['Software Tester at Lead School']}
                        />
                    </div>
                </div>
            </div>
            <ContactBanner/>
        </AboutPageStyles>
    )
}
