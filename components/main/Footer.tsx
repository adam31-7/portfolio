import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] bg-[#080808be]">
        <div className="w-full flex flex-col items-center justify-center m-auto bg-[#080808be]">

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Mes infos</div>
                   <p className="flex flex-row items-center my-[10px] cursor-pointer">
                    <MdOutlineAttachEmail />
                        <span className="text-[17px] ml-[6px]">adam.ladjal@viacesi.fr</span>
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[17px] ml-[6px]">Linkedin</span>
                    </p>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[17px] ml-[6px]">Github</span>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy;2024 Inc. Tout droit réservées.
            </div>
        </div>
    </div>
  )
}

export default Footer