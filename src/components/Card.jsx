import { styled } from 'styled-components';

const DivCard = styled.div`
  background-color: #c2c3c6;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  width: 15rem;
  position: relative;
  margin-bottom: 1rem;

  &:hover {
    background-color: red;
  }
`;

const Img = styled.img`
  width: 100%;
  align-items: center;
  /* margin-top: -2rem; */
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
      <CloseBtn onClick={props.onClose}>X</CloseBtn>
      <Img src={props.image} alt="" />
      {/* <h2>{props.id}</h2> */}
      <Name>{props.name}</Name>
      {/* <h2>{props.status}</h2> */}
      <SpeciesGenderContainer>
        <SpeciesGender>{props.species}</SpeciesGender>
        <SpeciesGender>{props.gender}</SpeciesGender>
      </SpeciesGenderContainer>
      {/* <h2>{props.origin}</h2> */}
    </DivCard>
  );
}
