import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './PText'

const FooterStyle = styled.div`
    background-color: var(--deep-dark);
    padding-top: 40px;

    .container{
        display: flex;
        gap: 30px;
    }

    .footer__col1{
        flex: 2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4 {
        flex: 1;
    }

    .footer__col1__title{
        font-size: 36px;
        margin-bottom: 10px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    
    .copyright{
        background-color: var(--dark-bg);
        text-align: center;
        padding: 10px 0;
        margin-top: 50px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        .para{
            margin-left: 0;
            font-size: 16px;
            text-align: center;
        }
    }

    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            gap: 0px;

            & > div {
                margin-top: 40px;
            }
        }
        
        .footer__col1 .para {
            max-width: 100%;
        }

        .copyright {
            .container {
                div {
                    margin-top: 0;
                }
            }
        }
    }
`

export default function Footer() {
    return (
        <FooterStyle>
            <div className='container'>
                <div className='footer__col1'>
                    <h1 className='footer__col1__title'>Rahul Tiwari</h1>
                    <PText>
                        A web designer and developer from Maharashtra, India.
                        I always make websites that have unique designs and also has a good
                        performance rate.
                    </PText>
                </div>
                <div className='footer__col2'>
                    <FooterCol
                        heading='Important Links'
                        links={[
                            {
                                title: 'Home',
                                path: '/',
                                type: 'Link',
                            },
                            {
                                title: 'About',
                                path: '/about',
                                type: 'Link',
                            },
                            {
                                title: 'Project',
                                path: '/projects',
                                type: 'Link',
                            },
                            {
                                title: 'Contact',
                                path: '/contact',
                                type: 'Link',
                            },
                        ]}
                    />
                </div>
                <div className='footer__col3'>
                    <FooterCol
                        heading="Contact Info"
                        links={[
                        {
                            title: '+123-456-789',
                            path: 'tel:++123-456-789',
                        },
                        {
                            title: 'tiwarirahul28042002@gmail.com',
                            path: 'mailto:tiwarirahul28042002@gmail.com',
                        },
                        {
                            title: 'Shaitan gali, khatra mahal, andher nagar, shamshan ke samne.',
                            path: 'http://google.com/maps',
                        },
                        ]}
                    />
                </div>
                <div className="footer__col4">
                <FooterCol
                    heading="social Links"
                    links={[
                    {
                        title: 'Facebook',
                        path: 'https://www.facebook.com/profile.php?id=100043219863014',
                    },
                    {
                        title: 'LinkedIn',
                        path: 'https://www.linkedin.com/in/rahul-tiwari-6a90051b4/',
                    },
                    {
                        title: 'Instagram',
                        path: 'https://www.instagram.com/_i_am_rahul_9/',
                    },
                    ]}
                />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                <PText>
                    © 2021 - Rahul Tiwari | Designed By{' '}
                    <a target="_blank" rel="noreferrer" href="https://github.com/TheRahulTiwari28">
                    Rahul Tiwari
                    </a>{' '}
                </PText>
                </div>
            </div>
        </FooterStyle>
    )
}
