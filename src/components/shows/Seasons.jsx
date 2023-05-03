const Seasons = ({ seasons }) => {
  const totalSeasons = seasons.length;
  return (
    <div>
      <p>Seasons in total : {totalSeasons}</p>

      <p>
        Total episodes :{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p>Season {season.number}</p>
            <p>Episodes : {season.episodeOrder}</p>
            
            <div>
              Aired : {season.premiereDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
