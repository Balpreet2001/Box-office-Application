import { useStarredShows } from '.././lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowsbyIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import {TextCenter } from '../components/common/TextCenter'
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
    return <TextCenter>No shows were starred</TextCenter>;
  }
  if (starredShowsErrors) {
    return <TextCenter> error occurred {starredShowsErrors.message} </TextCenter>;
  }

  return <TextCenter>shows are loading</TextCenter>;
};

export default Starred;
