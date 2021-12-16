import React from 'react'
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
    padding: 20px;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 8px;
    margin-bottom: 20px;

    .icon{
        color: var(--dark-bg);
        background-color: var(--deep-dark);
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    svg{
        width: 36px;
    }
`

export default function ContactInfoItem({
    icon = <MdPlace />,
    text = 'I need text ',
}) {
    return (
        <ItemStyles>
            <div className='icon'>{icon}</div>
            <div className='info'>
                <PText>{text}</PText>
            </div>
        </ItemStyles>
    )
}
