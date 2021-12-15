import React from 'react'
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    gap: 50px;
    margin-top: 30px;
    
    .title{
        font-size: 24px;
    }
    .items{
        display: flex;
        gap: 16px;
        position: absolute;
        left: 180px;
    }
    .item{
        background-color: var(--deep-dark);
        padding: 10px;
        border-radius: 8px;
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        .items {
            position: initial;
            gap: 10px;
        }
        .title {
            font-size: 18px;
        }
    }
`

export default function AboutInfoItem({
    title = 'Title',
    items = ['HTML', 'CSS'],
}) {
    return (
        <AboutItemStyles>
            <h1 className='title'>{title}</h1>
            <div className='items'>
                {items.map((item, index) => (
                    <div className='item' key={index}>
                        <PText>{items}</PText>
                    </div>
                ))}
            </div>
        </AboutItemStyles>
    )
}
