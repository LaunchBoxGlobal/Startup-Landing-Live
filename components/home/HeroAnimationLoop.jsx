"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import HeroAnimation from "./HeroAnimation";
import HeroAnimation2 from "./HeroAnimation2";

const ANIMATION_1_DURATION = 4000;
const ANIMATION_2_DURATION = 4000;

export default function HeroAnimationLoop() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    let timer;

    if (current === 1) {
      timer = setTimeout(() => {
        setCurrent(2);
      }, ANIMATION_1_DURATION);
    } else {
      timer = setTimeout(() => {
        setCurrent(1);
      }, ANIMATION_2_DURATION);
    }

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        {current === 1 && (
          <motion.div
            key="animation1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
            }}
            className="absolute inset-0"
          >
            <HeroAnimation isActive />
          </motion.div>
        )}

        {current === 2 && (
          <motion.div
            key="animation2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
            }}
            className="absolute inset-0"
          >
            <HeroAnimation2 isActive />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
