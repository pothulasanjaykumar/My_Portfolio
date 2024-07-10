import React from 'react';
import Blood from '../assets/portfolio/Blood.jpg';
import Group from '../assets/portfolio/Group.jpg';
import Ice from '../assets/portfolio/Ice-cream.jpg';
import TestGlider from '../assets/portfolio/TestGlider.jpg';
import nlp from '../assets/portfolio/NLP.jpg';
import Game from '../assets/portfolio/Game.jpg';

const Projects = () => {
  const projects = [
    { id: 1, src: Blood },
    { id: 2, src: Group },
    { id: 3, src: Ice },
    { id: 4, src: TestGlider },
    { id: 5, src: nlp },
    { id: 6, src: Game },
  ];

  return (
    <div name="project" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-8 md:py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check Out Some of My Work Right Here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt={`Project ${id}`} className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:bg-gray-700">Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:bg-gray-700">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

