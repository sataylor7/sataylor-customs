import React, { useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  
  return (
    <section className='w-full mx-auto bg-cyan-700 flex pt-12 md:pt-4 md:items-center bg-cover bg-right p-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col w-full justify-center items-center tracking-wide text-white'>
          <h1 className='text-2xl m-4'>
            Designed and Handmade with Love
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
