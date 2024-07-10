import React from 'react';
import c from '../assets/c.png';
import css from '../assets/css.png';
import git from '../assets/git-hub.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import node from '../assets/nodejs.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import mysql from '../assets/MySQL.png';
import weka from '../assets/weka.png';

const Skills = () => {
  const technologies = [
    { id: 1, src: c, title: "C Language", style: 'shadow-blue-500' },
    { id: 2, src: css, title: "CSS", style: 'shadow-blue-500' },
    { id: 3, src: git, title: "Git", style: 'shadow-white-500' },
    { id: 4, src: html, title: "HTML", style: 'shadow-orange-500' },
    { id: 5, src: java, title: "Java", style: 'shadow-red-500' },
    { id: 6, src: javascript, title: "JavaScript", style: 'shadow-yellow-500' },
    { id: 7, src: mysql, title: "MySQL", style: 'shadow-blue-500' },
    { id: 8, src: node, title: "Node.js", style: 'shadow-green-500' },
    { id: 9, src: react, title: "React.js", style: 'shadow-blue-500' },
    { id: 10, src: tailwind, title: "Tailwind CSS", style: 'shadow-blue-500' },
    { id: 11, src: weka, title: "Weka Tool", style: 'shadow-blue-500' },
  ];

  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full py-8 md:py-16'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Skills Set</p>
          <p className='py-6'>These are the technologies I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0'>
          {technologies.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 ${style} rounded-lg`}>
              <img src={src} alt={title} className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

