import React from 'react';
import tower from '../../images/projects/tower.jpg';
import skyscraper from '../../images/projects/skyscraper.jpg';
import forestHouse from '../../images/projects/forestHouse.jpg';
import house from '../../images/projects/house.jpg';
import Project from './Project';
import {ProjectsCtn} from '../styles/Projects';

class ProjectClass {
  constructor(name, desc, image) {
    this.name = name;
    this.description = desc;
    this.image = image;
  }
}

const PROJECTS = [
  new ProjectClass(
    'tower plans',
    'we managed to have a successful creation of plans for a tower required by a famous client',
    tower
  ),
  new ProjectClass(
    'skyscraper',
    'With the help of our professionals we managed to create a modern and beautiful skyscraper to satisfy the current needs of our clients',
    skyscraper
  ),
  new ProjectClass(
    'forest house',
    'here we achieve the creation of a beautiful holiday home, the dream of any adventurous person',
    forestHouse
  ),
  new ProjectClass(
    'modern house',
    'we managed to have a successful creation of plans for a tower required by a famous client',
    house
  ),
];

function Projects() {
  return (
    <ProjectsCtn>
      {PROJECTS.map((project, index) => {
        return (
          <Project
            name={project.name}
            desc={project.description}
            photo={project.image}
            key={index}
          />
        );
      })}
    </ProjectsCtn>
  );
}

export default Projects;
