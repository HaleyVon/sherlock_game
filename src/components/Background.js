import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Background = ({ image, children }) => {
  return <BackgroundWrapper image={image}>{children}</BackgroundWrapper>;
};

export default Background;
