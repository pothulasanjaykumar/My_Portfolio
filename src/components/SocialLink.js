import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLink = () => {
  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={30} />,
      href: 'https://www.linkedin.com/in/pothula-sanjay-kumar',
      label: 'LinkedIn',
      download: false
    },
    {
      id: 2,
      icon: <FaGithub size={30} />,
      href: 'https://github.com/pothulasanjaykumar',
      label: 'GitHub',
      download: false
    },
    {
      id: 3,
      icon: <HiOutlineMail size={30} />,
      href: 'mailto:sanjay15946@gmail.com',
      label: 'Email',
      download: false
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={30} />,
      href: 'https://drive.google.com/file/d/1vMIFXMbyGmPPDG8QioE0XeiCxmrx0rTK/view?usp=sharing',
      label: 'Resume',
      download: true
    }
  ];

  return (
    <div className="hidden fixed lg:flex flex-col top-[35%] left-0">
      <ul>
        {links.map(({ id, icon, href, label, download }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:ml-[-10px] ml-[-100px] hover:bg-gray-700 duration-300"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noopener noreferrer"
              download={download}
            >
              {label} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLink;

