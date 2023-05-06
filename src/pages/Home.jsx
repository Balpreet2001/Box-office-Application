import { useQuery } from '@tanstack/react-query';
import { useState} from 'react';
import { searchForShows } from './../api/tvmaze';
import { searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';
import {TextCenter} from '../components/common/TextCenter'


const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.query)
        : searchForPeople(filter.query),

    enabled: !!filter,

    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ query, searchOption }) => {
    setFilter({ query, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error occured : {apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>no results</TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
    }

    return null;
  };

  return (
    <TextCenter>
      <SearchForm onSearch={onSearch} />

      <TextCenter>{renderApiData()}</TextCenter>
    </TextCenter>
  );
};

export default Home;
