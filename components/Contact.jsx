/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg'
import AboutImg from '../public/assets/about.jpg';

const Contact = () => {

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1000px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#ae3cfa]'>
          Contact Me
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left side */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 flex items-center justify-center rounded-xl p-4'>
            <div className='lg:p-8 h-full '>
            <a href="mailto:flavia.hotts@gmail.com">
            <div className='w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} className='rounded-xl' alt='/' />
            </div>  
            </a>            
            <div>                
                <p className='py-8 text-gray-200'>
                  I'm available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 text-[#ae3cfa]'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/flavia-hotts/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='text-[#ae3cfa] rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/flaviahotts'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='text-[#ae3cfa] rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <a href="mailto:flavia.hotts@gmail.com">
                  <div className='text-[#ae3cfa] rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className='col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/5a8f3afd-ca8c-4219-a2ee-68441ad12376'
                method='POST'
                enctype='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#2b2b2b]'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#2b2b2b]'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#2b2b2b]'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#2b2b2b]'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 bg-[#2b2b2b]'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 shadow-md bg-[#d19df3] text-gray-800 mt-4 font-semibold'>
                  Send 
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#ae3cfa]'
                  size={30}
                />
              </div>
            </a>
          </Link>          
        </div>
      <div className='text-center'>Built by Flavia Hotts ❤</div> 
      </div>
    </div>
  );
};

export default Contact;