import React from 'react';
import Juampi from '../images/juampi.jpg';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  gap: 0.75rem;
  backdrop-filter: blur(100px);
  width: 70%;
  margin: 2.5rem auto;
  border-radius: 25px;
  
`;

const AboutImg = styled.img`
  height: 15rem;
  border-radius: 50%;
  margin: .75rem 0 .75rem .75rem;
`

const AboutText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-right: 0.75rem;
  color: #fff;
`;
const About = () => {
  return (
    <Container>
      <AboutImg src={Juampi} alt="Juampi tirando facha" />
      <AboutText>Hola, soy Juan Pablo, tengo 38 años, soy Productor Asesor de Seguros y estoy aquí, al fin, dándome la oportunidad de aprender todo lo posible para poder vivir de la programación.
        <br />Estoy casado con Anahí, tengo 2 hijitas (Solcito de 5, y Azulita de 2), vivimos en Posadas (Misiones, Argentina) y nuestro sueño es poder viajar y conocer muchos lugares juntos. <br />
        Así que anhelo (y me estoy esforzando mucho para ello) que este paso por Henry sea transformador en nuestras vidas.
       </AboutText>
    </Container>
  );
};

export default About;
