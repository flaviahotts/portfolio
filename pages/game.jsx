import Image from 'next/image';
import React from 'react';
import gameImg from '../public/assets/projects/game.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const game = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={gameImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Jumping Game</h2>
          <h3>HTML / CSS / JavaScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 '>
        <div className='col-span-4'>
          <p className='text-[#ae3cfa]'>Project</p>
          <h2>Overview</h2>
          <p className='text-justify'> SpongeBob Jump is inspired by the Dinosaur Game developed by Google.</p>
          <p className='text-justify'>To play the game you just need to avoid the obstacles by jumping across a side-scrolling landscape. Easy peasy!</p>
          <p className='text-justify'>This game was built using HTML, CSS and JavaScript.</p>
          <a
            href='https://github.com/flaviahotts/game-project'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 bg-[#d19df3] text-gray-800 font-semibold'>Code</button>
          </a>
          <a
            href='https://flaviahotts.github.io/game-project/'
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
                <RiRadioButtonFill className='pr-1 text-[#ae3cfa] ' /> HMTL
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#ae3cfa]' /> CSS
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#ae3cfa]' /> JavaScript
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

export default game;