import React from 'react'
import styled from 'styled-components'

const SectionTitleStyles = styled.div`
    text-align: center;

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 20px;
    }

    h2{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 60px;
        margin-top: 5px;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 768px){
        text-align: center;
        p{
            font-size: 12px;
        }
        h2{
            font-size: 36px;
        }
    }
`;

export default function SectionTitle({subheading = 'Need Subheading', heading = 'need heading',}) {
    return (
        <SectionTitleStyles className="section-title">
            <p>{subheading}</p>
            <h2>{heading}</h2>
        </SectionTitleStyles>
    )
}
