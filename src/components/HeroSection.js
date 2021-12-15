import React from 'react'
import styled from 'styled-components';
import Avatar from '../assets/images/avatar.jpg'
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
    .hero{
        height: 100vh;
        min-height: 900px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .hero__heading{
        font-size: 20px;
        margin-bottom: -4rem;
        position: relative;

        span{ 
            display: inline-block;
            width: 100%;
        }

        .hero__name{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 70px;
            color: var(--white);
        }
    }

    .hero__img{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .hero__info{
        margin-top: -18rem;
    }

    .hero__social,
    .hero__scrollDown{
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: absolute;
        bottom: 20px;
        width: 50px;
    }
    .hero__socail{
        left: 0px;
    }
    .hero__scrollDown {
        right: 50px;
    }
    .hero__social__indicator,
    .hero__scrollDown {
        width: 50px;

        p{
            font-size: 14px;
            transform: translateY(-70px) rotate(90deg);
            letter-spacing: 6px;
            text-transform: uppercase;
        }

        img {
            max-height: 45px;
            width: 16px;
            margin: 0 auto;
            object-fit: contain;
        }
    }

    .hero__scrollDown {
        img {
            max-height: 70px;
        }
    }

    .hero__social__text {
        ul {
            li {
                margin-bottom: 10px;
                a {
                display: inline-block;
                font-size: 16px;
                transform: rotate(-90deg);
                letter-spacing: 5px;
                margin-bottom: 20px;
                }
            }
        }
    }

    @media only screen and (max-width: 768px) {
        .hero{
            min-height: 750px;
        }
        .hero__heading{
            font: 14px;
            margin-bottom: -3rem;

            .hero__name{
                font-size: 40px;
            }
        }
        .hero__img{
            height: 400px;
        }
        .hero__info{
            margin-top: 30px;
        }
        .hero__social{
            left: 0;
            bottom: -15%;
            width: 20px;

            .hero__social__indicator{
                width: 20px;

                p{
                    font-size: 12px;
                }
                img{
                    max-height: 22px;
                }
            }
            .hero__social__text {
                ul{
                    li{
                        a{
                            font-size: 12px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
        .hero__scrollDown {
            right: 0;
            width: 20px;
            gap: 10px;

            p {
                font-size: 1.3rem;
            }
        }
    }
`

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className='hero'>
                <div className='container'>
                    <h1 className='hero__heading'>
                        <span>Hello, This is</span>
                        <span className='hero__name'>Rahul Tiwari</span>
                    </h1>
                    <div className='hero__img'>
                        <img src={Avatar} alt="" />
                    </div>
                    <div className='hero__info'>
                        <PText>
                            I am working as a freelance web designer and developer for 4
                            years. I love to design and make new web experiences for the
                            people.
                        </PText>
                        <Button btnText='See My Work' btnLink='/projects'/>
                    </div>
                    <div className='hero__social'>
                        <div className='hero__social__indicator'>
                            <p>Follow</p>
                            <img src={SocialMediaArrow} alt="icon"/>
                        </div>
                        <div className='hero__social__text'>
                            <ul>
                                <li>
                                    <a
                                        href='https://www.facebook.com/profile.php?id=100043219863014'
                                        target="_blank"
                                        rel='noreferrer'
                                    >
                                        FB  
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.instagram.com/_i_am_rahul_9/'
                                        target="_blank"
                                        rel='noreferrer'
                                    >
                                        IG  
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.linkedin.com/in/rahul-tiwari-6a90051b4/'
                                        target="_blank"
                                        rel='noreferrer'
                                    >
                                        LD 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__scrollDown">
                        <p>Scroll</p>
                        <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
                    </div>
                </div>
            </div>
        </HeroStyles>
    )
}
