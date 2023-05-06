import ShowCard from './ShowCard';
import {useStarredShows} from '../../lib/useStarredShows'
import {FlexGrid} from '../common/FlexGrid'
const ShowGrid = ({ shows }) => {
  // eslint-disable-next-line
  let showimage = require('../../assets/show-not-found.png');

  const [starredShows, dispatchStarredShows] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarredShows({ type: 'UNSTAR', showId });
    } else [dispatchStarredShows({ type: 'STAR', showId })];
  };
  return (
    <FlexGrid>
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
    </FlexGrid>
  );
};

export default ShowGrid;
