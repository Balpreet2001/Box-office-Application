import { useState } from 'react';
import { searchForShows } from './../api/tvmaze';
import { searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [apiData, setapiData] = useState(null);
  const [apiDataError, setapiDataError] = useState(null);

  const onSearch = async ({ query, searchOption }) => {
    try {
      setapiDataError(null);
      let result;
      if (searchOption === 'shows') {
        result = await searchForShows(query);
      } else {
        result = await searchForPeople(query);
      }

      setapiData(result);
    } catch (error) {
      setapiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured : {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
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
