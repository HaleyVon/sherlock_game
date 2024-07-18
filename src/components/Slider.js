import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SliderWrapper = styled(motion.div)`
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
  width: 100%;
`;

const Slider = ({ children }) => {
  return (
    <SliderWrapper
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
    >
      {children}
    </SliderWrapper>
  );
};

export default Slider;
