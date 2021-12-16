import React from 'react'
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
    background: url(${MapImg}) no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 400px;
    .container {
        position: relative;
        min-height: 400px;
    }
    .map__card{
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 20px;
        background-color: var(--deep-dark);
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
    .map__card__heading {
        font-size: 33px;
        margin-bottom: 10px;
  }
    .map__card__link {
        display: inline-block;
        font-size: 16px;
        margin-top: 30px;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px) {
        background-position: 80% center;
    }
    @media only screen and (max-width: 400px) {
        .map__card {
            max-width: none;
            right: auto;
        }
    }

`

export default function Map() {
    return (
        <MapStyles>
            <div className='container'>
                <div className='map__card'>
                    <div className='map__card__heading'>Here is Me</div>
                    <PText>Shaitan gali, khatra mahal, andher nagar, shamshan ke samne.</PText>
                    <a 
                        href='https://www.google.com/maps/@19.0492325,72.8633633,15z'
                        className='map__card__link'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Open In Google Map
                    </a>
                </div>
            </div>
        </MapStyles>
    )
}
