import Card from './Card';
import { styled } from 'styled-components';

const DivCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;
export default function Cards({ characters, onClose }) {
  return (
    <DivCards>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            //* {...character} ---> esto reemplazaría TODO desde la fila 10 a 16
            onClose={onClose}
          />
        );
      })}
    </DivCards>
  );
}
