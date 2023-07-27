import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions/actions';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

const DivCard = styled.div`
  background-color: rgba(241, 10, 145, 0.8);
  border-radius: 0.5rem;
  width: 15rem;
  position: relative;
  margin: 1rem 0.5rem;

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
  bottom: 3.7rem;
  left: 1rem;
`;

const SpeciesGenderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: .5rem;
`;

const SpeciesGender = styled.h2`
  font-size: large;
  color: white;
`;

function Card({onClose, id, image, name, gender, species, addFav, removeFav, allCharacters,...props}) {
  const {pathname} = useLocation();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    allCharacters.forEach((charFav) => {
      if (charFav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);


  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, image, name, gender, species });
    }
  };

  return (
    <DivCard>
      {pathname === '/home' && <CloseBtn onClick={() => onClose(id)}>X</CloseBtn>}
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Img src={image} alt="" />
      <Link to={`/detail/${id}`}>
        <Name>{name}</Name>
      </Link>
      <SpeciesGenderContainer>
        <SpeciesGender>Id: {id}</SpeciesGender>
        <SpeciesGender>{gender}</SpeciesGender>
        <SpeciesGender>{species}</SpeciesGender>
      </SpeciesGenderContainer>
    </DivCard>
  );
}

function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);