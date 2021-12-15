import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyle = styled.div`
    .heading {
        font-size: 20px;
        margin-bottom: 18px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    li {
        margin-bottom: 10px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    a {
        font-size: 16px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;

export default function FooterCol({
    heading = 'Col Heading',
    links = [
        {
        type: 'Link',
        title: 'Home',
        path: '/home',
        },
        {
        type: 'Link',
        title: 'About',
        path: '/about',
        },
    ],
    }) {
    return (
        <ColStyle>
            <h2 className="heading">{heading}</h2>
            <ul>
                {links.map((item, index) => (
                <li key={index}>
                    {item.type === 'Link' ? (
                    <Link to={item.path}>{item.title}</Link>
                    ) : (
                    <a href={item.path} target="_blank" rel="noreferrer">
                        {item.title}
                    </a>
                    )}
                </li>
                ))}
            </ul>
        </ColStyle>
    );
}
