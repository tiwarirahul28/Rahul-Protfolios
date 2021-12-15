import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
    text-align: center;

    .servicesItem__icon{
        svg{
            width: 50px;
        }
    }
    .servicesItem__title{
        font-size: 26px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .para{
        margin-top: 20px;
    }
`;

export default function ServicesSectionItem({
    icon = <MdDesktopMac />,
    title = 'Web Design',
    desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
    return (
        <ItemStyles className='servicesItem'>
            <div className='servicesItem__icon'>{icon}</div>
            <div className='servicesItem__title'>{title}</div>
            <PText>{desc}</PText>
        </ItemStyles>
    )
}
