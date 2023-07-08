import React from 'react';
import Juampi from '../images/juampi.jpg';
import { styled } from 'styled-components';

const AboutImg = styled.img`
  height: 15rem;
  border-radius: 50%;
`
const About = () => {
  return (
    <div>
      <AboutImg src={Juampi} alt="Juampi tirando facha" />
    </div>
  );
};

export default About;
