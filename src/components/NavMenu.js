import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';


const NavStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    background: var(--dark-bg);
    ul {
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
          li {
            display: inline-block;
            border-radius: 8px;
            transition: 0.3s ease background-color;
            &:hover {
                background-color: var(--deep-dark);
            }
        }
        a {
        display: inline-block;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        padding: 10px 20px;
        font-size: 18px;
        color: var(--gray-1);
        outline: none;
        }
        .active {
        color: var(--white);
        }
    }
    .mobile-menu-icon{
        position: absolute;
        right: 14px;
        top: 10px;
        width: 40px;
        cursor: pointer;
        display: none;
        outline: none;

        *{
            pointer-events: none;
        }
    }
    .closeNavIcon{
        display: none;
    }
    @media only screen and (max-width: 768px){
        padding: 0;
        .mobile-menu-icon{
            display: block;
        }
        .hide-item{
            display: none;

            transition: 00.5s;
            /* transform: translateY(calc(-100% var(---top))); */
        }
        .navItem{
            --top: 10px;
            transition: 00.3s ease transform;
            background-color: var(--deep-dark);
            padding: 20px;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 0px;
            top: var(---top);

            .closeNavIcon{
                display: block;
                width: 30px;
                margin: 0 0 0 auto;
                cursor: pointer;

                *{
                    pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 10px;
            }
        }
        
    }
`


export default function NavMenu() {
    const [showNav, setShowNav] = useState(false);
    return (
        <NavStyles>
            <div className='mobile-menu-icon'
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
            >
                <MdMenu/>
            </div>
            <ul className={!showNav ? 'navItem hide-item' : "navItem"}>
                <div className='closeNavIcon'
                    onClick={() => setShowNav (! showNav)}
                    role="button"
                    onKeyDown={() => setShowNav (! showNav)}
                    tabIndex={0}
                >
                    <MdClose/>
                </div>
                <li>
                    <NavLink 
                        to="/"
                        exact
                        onClick={() => setShowNav (! showNav)}
                        role="button"
                        onKeyDown={() => setShowNav (! showNav)}
                        tabIndex={0}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about"
                        exact
                        onClick={() => setShowNav (! showNav)}
                        role="button"
                        onKeyDown={() => setShowNav (! showNav)}
                        tabIndex={0}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/projects"
                        exact
                        onClick={() => setShowNav (! showNav)}
                        role="button"
                        onKeyDown={() => setShowNav (! showNav)}
                        tabIndex={0}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact"
                        exact
                        onClick={() => setShowNav (! showNav)}
                        role="button"
                        onKeyDown={() => setShowNav (! showNav)}
                        tabIndex={0}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </NavStyles>
    )
}
