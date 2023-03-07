import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import { motion } from "framer-motion";

export const Carousel = () => {
  const carousel: any = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="carousel-container">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="item">Teste</motion.div>
          <motion.div className="item">Teste 2</motion.div>
          <motion.div className="item">Teste 3</motion.div>
          <motion.div className="item">Teste 4</motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
