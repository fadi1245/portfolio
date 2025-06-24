import React from 'react';
import resume from '/Mohammed-Fadi-Resume.pdf';

function Uploadresume() {
  return (
    <div className="flex justify-center items-center mt-10 border-b border-neutral-900 pb-10">
      <a href={resume} download="mohammedFadi-Resume.pdf">
      <div className="relative z-0 w-[300px] h-[80px] text-center cursor-pointer text-2xl flex justify-center items-center
  text-white bg-[#111] rounded-[10px]
  transition-opacity duration-300 ease-in-out active:text-black
  before:content-[''] before:absolute before:top-[-4px] before:left-[-4px]
  before:w-[calc(100%+10px)] before:h-[calc(100%+10px)] before:rounded-[10px]
  before:z-[-1] before:blur-[5px]
  before:bg-[linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)]
  before:bg-[length:400%] before:animate-glowing before:opacity-0
  before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-100
  after:content-[''] after:absolute after:w-full after:h-full after:bg-[#111]
  after:left-0 after:top-0 after:rounded-[10px] after:z-[-1]">
  Download my Resume
</div>

      </a>
    </div>
  );
}

export default Uploadresume;
