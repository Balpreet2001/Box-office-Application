import ShowCard from './ShowCard';


const ShowGrid = ({ shows }) => {
     let showimage = require('../../assets/show-not-found.png');
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : showimage}
          summary={data.show.summary}

        />
      ))}
    </div>
  );
};

export default ShowGrid;
