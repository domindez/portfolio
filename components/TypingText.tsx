'use client';

import React, { useEffect, useState } from 'react';

type Props = {
  text: string;
};

const TypingText = ({ text }: Props) => {
  const [toWrite, setToWrite] = useState('');
  let textString = '';

  const write = async () => {
    for (let i = 0; i < text.length; i++) {
      textString += text[i];
      setToWrite(textString);
      await wait(text[i]);
    }
  };

  useEffect(() => {
    write();
  }, []);

  return <>{toWrite !== '' && <h2>{toWrite}</h2>}</>;
};

export default TypingText;

// Returns a Promise that resolves after "ms" Milliseconds
const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function wait(char: string) {
  // We need to wrap the loop into an async function for this to work
  await timer(char === ' ' ? 0 : 75); // then the created Promise can be awaited
}
