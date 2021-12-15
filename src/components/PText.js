import React from 'react'
import styled from 'styled-components';

const PStyle = styled.div`
    max-width: 500px;
    margin: 0 auto ;
    font-size: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    line-height: 20px;
    @media only screen and (max-width: 768px) {
        font-size: 16px;
    }
`

export default function PText({children}) {
    return (
        <PStyle className='para'>
            <p>{children}</p>
        </PStyle>
    )
}
