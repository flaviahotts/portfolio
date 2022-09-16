/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S WORK TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hello, I'm <span className='text-[#ae3cfa]'> Flavia</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Web Developer.</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Welcome to my portfolio which was developed using Next.js and Tailwind CSS.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/flavia-hotts-5053b826/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg text-[#ae3cfa] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/flaviahotts'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg text-[#ae3cfa] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg text-[#ae3cfa] font-bold p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;