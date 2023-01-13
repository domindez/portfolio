'use client';

import React from 'react';
import '../sass/Home.scss';
import TypingText from './TypingText';

function Home() {
  return (    
    <div className={'home'}>
      <TypingText text='Hola, esto es una prueba...' />
    </div>    
  );
}

export default Home;
