'use client';

import React from 'react';
import '../sass/Home.scss';
import TypingText from './TypingText';
import Image from 'next/image';
import profilePic from '../img/dani.jpeg';

function Home() {
  return (    
    <div className={'home'}>
      <Image className='profile-img'
        src={profilePic}
        alt='Picture of the author'
        priority
        width={400}
        height={400}
      />      
      <TypingText text='Hola, esto es una prueba...' />
    </div>    
  );
}

export default Home;
