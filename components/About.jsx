/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1000px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#ae3cfa]'>
            About Me
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='text-justify py-2 text-gray-200'>
          My name is Flavia and I'm based in Manchester, UK.
          </p>
          <p className='text-justify py-2 text-gray-200'>
            Currently changing careers from Enviromental Engeneering to Web Development.
            I started learning HTML and CSS to building websites and my interests for programming was only increasing.
            Fascinated with how powerful programming can be I was quickly drawn to learn more.
            I thought it would be the right time to decide to go deeper into coding and start a new path in my professional life.
          </p>
          <p className='text-justify py-2 text-gray-200'>
            I recently graduated from a Full Stack Web Development Bootcamp and I'm dedicating myself to keep learning in this field. 
            I'm focused on front-end web applications but also open to learning back-end technologies.
            I'm now spending my time studying JavaScript, React and Next.js.            
          </p>
          <p className='text-justify py-2 text-gray-200'>
            I enjoy learning new things and some of my passions are about nature, technology, arts, cooking and travelling.      
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-[#ae3cfa] underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'>
          <a
            href='https://www.linkedin.com/in/flavia-hotts/'
            target='_blank'
            rel='noreferrer'>
            <Image src={AboutImg} className='rounded-xl' alt='/' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;