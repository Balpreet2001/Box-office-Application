import { useStarredShows } from '.././lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowsbyIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsErrors } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsbyIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShows?.length === 0) {
    return <div>No shows were starred</div>;
  }
  if (starredShowsErrors) {
    return <div> error occurred {starredShowsErrors.message} </div>;
  }

  return <div>shows are loading</div>;
};

export default Starred;
