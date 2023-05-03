import ShowCard from './ShowCard';
import {useStarredShows} from '../../lib/useStarredShows'
const ShowGrid = ({ shows }) => {
  
    
let showimage = require('../../assets/show-not-found.png');

const [starredShows, dispatchStarredShows ] = useStarredShows()

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarredShows({ type: 'UNSTAR', showId });
    } else [dispatchStarredShows({ type: 'STAR', showId })];
  };
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : showimage}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
