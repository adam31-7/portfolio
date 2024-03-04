"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className="flex items-center justify-center bg-black h-[800px] cursor-pointer relative" id="more">
      <div
        className="flip-card w-[800px] h-[560px] rounded-md absolute z-[20]"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${"/Projet.jpg"})` }}
          >
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${"/SpaceCity1.jpg"})` }}
          >
            <h1 className="text-2xl font-bold">Site web d&apos;offres de stage</h1>
            <p className="text-1xl">Or in the maze of the city</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;