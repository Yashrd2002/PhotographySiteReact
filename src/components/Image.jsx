import React from "react";
import { motion } from "framer-motion";
const Image = ({ url }) => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    }
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="img-card"
    >
      <img src={url} alt=".."></img>
    </motion.div>
  );
};

export default Image;
