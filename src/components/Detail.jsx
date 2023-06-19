import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const DivDetail = styled.div`
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  width: 60%;
  height: auto;
  margin: 0 auto;
  border-radius: 3.45rem;
  align-items: center;
`;

const ImgDetail = styled.img`
  border-radius: 3.45rem;
`

const TextDetail = styled.h3`
  line-height: 2.5rem;
  text-align: justify;
  padding: 0 0.65rem;
`
function Detail() {
  const { id } = useParams();
  const [charDetail, setCharDetail] = useState({});
useEffect(() => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        setCharDetail(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    })
    .catch((err) =>
      alert(`${err.response.data.error} --> traducción: le pifiaste al ID...`)
    );
  return setCharDetail({});
}, [id]);

  const { name, status, species, gender, image } = charDetail;
  return (
    <DivDetail>
      <span>
        <ImgDetail src={image} alt={name} />
      </span>
      <span>
        {/* <h3>Id: {id}</h3>
        <h2>{name}</h2>
        <h4>{status}</h4>
        <h4>{species}</h4>
        <h4>{gender}</h4>
        <h4>{origin?.name}</h4> */}
        <TextDetail>{name} es un valiente {species} proveniente de la historieta de Rick and Morty. A pesar de los desafíos que ha enfrentado, y siendo {gender}, su espíritu sigue {status}, demostrando así su increíble resistencia y determinación. Con su habilidad única y su valentía, {name} ha dejado una huella imborrable en la historia de Rick and Morty.</TextDetail>
      </span>
    </DivDetail>
  );
}

export default Detail;
