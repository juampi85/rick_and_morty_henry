import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';

const Favorites = ({myFavorites}) => {
  return (
    <div>
      {
        myFavorites.map((character) => { 
          return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin?.name}
            image={character.image}
          />
          )
        })
      }</div>
  );
};

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);