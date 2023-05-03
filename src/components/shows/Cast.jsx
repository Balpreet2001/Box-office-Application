const Cast = ({ cast }) => {
  let showimage = require('../../assets/show-not-found.png');
  return (
    <div>
      {cast.map(({person , character , voice}) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : showimage}
            />
          </div>
          <div>
               {person.name} | {character.name} {voice && '| voiceover'} 
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
