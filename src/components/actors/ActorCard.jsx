
const ActorCard = ({name , image , gender, country ,birthday , deathday}) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name} {!!gender && `(${gender})`}</h1>

      <p>{country ? `Comes from ${country}`:'No country known' }</p>

      {!!birthday && <p>Born on {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>

    </div>
  );
}

export default ActorCard