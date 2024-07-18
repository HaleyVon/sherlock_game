import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DialogueBox = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const Dialogue = ({ text }) => {
  return (
    <DialogueBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Text>{text}</Text>
    </DialogueBox>
  );
};

export default Dialogue;
