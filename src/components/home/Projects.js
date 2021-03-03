import React, {Fragment} from 'react';
import tower from '../../images/projects/tower.jpg';
import skyscraper from '../../images/projects/skyscraper.jpg';
import forestHouse from '../../images/projects/forestHouse.jpg';
import house from '../../images/projects/house.jpg';
import bridge from '../../images/projects/bridge.jpg';
import castle from '../../images/projects/castle.jpg';
import glassSkyscraper from '../../images/projects/glassSkyscraper.jpg';
import Project from './Project';
import {ProjectsCtn, Title} from '../styles/Projects';

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
    `We managed to have a successful creation of plans for a tower required by a famous client.
    Today this tower is very famous, we are happy to say that it was our company that designed the plans for this complicated and beautiful structure`,
    tower
  ),
  new ProjectClass(
    'skyscraper',
    'With the help of our professionals we managed to create a modern and beautiful skyscraper to satisfy the current needs of our clients',
    skyscraper
  ),
  new ProjectClass(
    'forest house',
    `Here we achieve the creation of a beautiful holiday home, the dream of any adventurous person.
    built in a special place, with extraordinary views, perfect for nature lovers`,
    forestHouse
  ),
  new ProjectClass(
    'modern house',
    `We have built a great modern house, the best possible comfort to be with those you love the most.
    This project has been designed and built by us, winning an award for the best aesthetic of the year`,
    house
  ),
  new ProjectClass(
    'medieval bridge',
    `We are happy to say that we have been the creators of this particular bridge, with beautiful views and an unforgettable experience.
     The structure of this bridge is a modern structure but mixed with materials that make it look medieval`,
    bridge
  ),
  new ProjectClass(
    'castle',
    `This medieval and beautiful castle was planned and built by us.
     it was a great challenge to keep the tall structures standing, but with the help of our professional team we managed to obtain very good results
    `,
    castle
  ),
  new ProjectClass(
    'glass skyscraper',
    `glass skyscraper created entirely by us, without a doubt the result is a work of art, a very beautiful and very comfortable building for any person or tourist.`,
    glassSkyscraper
  ),
];

function Projects() {
  return (
    <Fragment>
      <Title>projects</Title>
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
    </Fragment>
  );
}

export default Projects;
