import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full h-full relative z-[20] text-gray-200 shadow-lg p-[15px]">
        <div className="w-full flex flex-col absolute items-center justify-center m-auto bg-[#00000014]">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[25px]">More about me : </div>
                   <p className="flex flex-row items-center my-[10px] cursor-pointer">
                    <MdOutlineAttachEmail />
                        <a className="text-[17px] ml-[6px]" href="mailto:adam.ladjal@viacesi.fr">adam.ladjal@viacesi.fr</a>
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxLinkedinLogo />
                        <a className="text-[17px] ml-[6px] " href="https://www.linkedin.com/in/adam-ladjal-536a97294/">Linkedin</a>
                    </p>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxGithubLogo />
                        <a className="text-[17px] ml-[6px]" href="https://github.com/adam31-7/">Github</a>
                    </p>
                    
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy;2025 Inc. All rights reserved.
            </div>
            
        </div>
    </div>
  )
}

export default Footer