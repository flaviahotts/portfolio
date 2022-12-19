import Image from 'next/image';
import React from 'react';
import websiteImg from '../public/assets/projects/website.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const website = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={websiteImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Business Website</h2>
          <h3>HTML / CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 '>
        <div className='col-span-4'>
          <p className='text-[#ae3cfa]'>Project</p>
          <h2>Overview</h2>
          <p className='text-justify'>This website was built using HTML and CSS. </p>
          <p className='text-justify'>It is a simple business website to show the products and social media.</p>
          <a
            href='https://github.com/flaviahotts/thecutterist-website'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 bg-[#d19df3] text-gray-800 font-semibold'>Code</button>
          </a>
          <a
            href='https://www.shecodes.io/workshops/shecodes-basics-75cf6d62-e610-4782-bdbb-c9b0f3e997fd/projects/770528'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 bg-[#d19df3] text-gray-800  font-semibold'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 '>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#ae3cfa] ' /> HTML
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#ae3cfa]' /> CSS
              </p>
              </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-[#ae3cfa]'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default website;