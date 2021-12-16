import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectInfo from '../assets/data/project';
import ProjectItem from '../components/ProjectItem';

const ProjectStyle = styled.div`
    padding: 100px 0;

    .projects__allItems{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 50px;
        margin-top: 50px;
    }
    .projects__searchBar{
        position: relative;
        width: 300px;
        margin-top: 50px;
    }
    .projects__searchBar input{
        width: 100%;
        font-size: 20px;
        padding: 8px;
        color: var(--black);
        border-radius: 12px;
        outline: none;
        border: none;
    }
    .projects__searchBar .searchIcon{
        position: absolute;
        width: 24px;
        right: 10px;
    }
    .projects__searchBar .searchIcon path{
        color: var(--deep-dark);
    }
    @media only screen and (max-width: 768px) {
        .projects__searchBar,
        .projects__searchBar form,
        .projects__searchBar input {
            width: 100%;
        }
    }
`

export default function Project() {
    const [searchText, setSearchText] = useState('');
    const [projectsData, setProjectsData] = useState(ProjectInfo);

    useEffect(() => {
        if (searchText === '') return;
        setProjectsData(() =>
        ProjectInfo.filter((item) =>
            item.name.toLowerCase().match(searchText.toLowerCase())
        )
        );
    }, [searchText]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0) {
        setProjectsData(ProjectInfo);
        }
    };
    return (
        <ProjectStyle>
            <div className='container'>
                <SectionTitle 
                    subheading='Some Of My Recent Works'
                    heading='Projects'
                />
                <div className='projects__searchBar'>
                    <form>
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleChange}
                            placeholder="Project Name"
                        />
                        <MdSearch className='searchIcon'/>
                    </form>
                </div>
                <div className='projects__allItems'>
                    {projectsData.map((item) => (
                        <ProjectItem
                            key={item.id}
                            title={item.name}
                            img={item.img}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        </ProjectStyle>
    )
}
