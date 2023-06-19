import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


const DivCard = styled.div`
  background-color: #c2c3c6;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  width: 15rem;
  position: relative;
  margin: 1rem .5rem;


  &:hover {
    background-color: rgba(125, 65, 38, 0.3);
  }
`;

const Img = styled.img`
  width: 100%;
  align-items: center;
  border-radius: 50%;
`;

const CloseBtn = styled.button`
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
`;

const Name = styled.h2`
  background-color: yellow;
  width: fit-content;
  padding-left: 1.5rem;
  padding-right: 1.6rem;
  margin: 0 auto;
  font-size: small;
  position: absolute;
  bottom: 5.7rem;
  left: 1rem;
`;

const SpeciesGenderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1.5rem;
`;

const SpeciesGender = styled.h2`
  font-size: large;
`;

export default function Card(props) {
  return (
    <DivCard>
      <CloseBtn onClick={() => props.onClose(props.id)}>X</CloseBtn>
      <Img src={props.image} alt="" />
      {/* <h2>{props.id}</h2> */}
      <Link to={`/detail/${props.id}`}>
        <Name>{props.name}</Name>
      </Link>
      {/* <h2>{props.status}</h2> */}
      <SpeciesGenderContainer>
        <SpeciesGender>Id: {props.id}</SpeciesGender>
        <SpeciesGender>{props.gender}</SpeciesGender>
        <SpeciesGender>{props.species}</SpeciesGender>
      </SpeciesGenderContainer>
    </DivCard>
  );
}
