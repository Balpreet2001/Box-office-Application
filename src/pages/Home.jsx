import { useQuery } from '@tanstack/react-query';
import { useState, useReducer } from 'react';
import { searchForShows } from './../api/tvmaze';
import { searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';
import styled , {css , ThemeProvider} from 'styled-components'


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
      return <div>Error occured : {apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>no results</div>;
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
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
