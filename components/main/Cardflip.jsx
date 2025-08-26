"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const CardFlip = () => {
  const [isFlippedCard1, setIsFlippedCard1] = useState(false);
  const [isFlippedCard2, setIsFlippedCard2] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div
      id='projects'
      className="flex flex-col items-center justify-center bg-black h-[800px] cursor-pointer gap-8 relative"
    >
      {/* Carte 1 */}
      <div
        className="flip-card w-[800px] h-[560px] rounded-md z-[20]"
        onClick={() => {
          if (!isAnimating) {
            setIsFlippedCard1(!isFlippedCard1);
            setIsAnimating(true);
          }
        }}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlippedCard1 ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url("/Projet.jpg")` }}
          />
          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url("/SpaceCity1.jpg")` }}
          />
        </motion.div>
      </div>

      {/* Carte 2 */}
      <div
        className="flip-card w-[800px] h-[560px] rounded-md z-[20]"
        onClick={() => {
          if (!isAnimating) {
            setIsFlippedCard2(!isFlippedCard2);
            setIsAnimating(true);
          }
        }}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlippedCard2 ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url("/EasySave.jpg")` }}
          />
          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url("/EasySave back.jpg")` }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
