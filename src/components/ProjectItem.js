import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/fithit.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 10px;
    background-color: var(--deep-dark);
    padding: 10px;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 22px;
  }
  .projectItem__desc {
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 10px;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 300px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
