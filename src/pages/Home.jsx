import { useState } from 'react';
import { searchForShows } from './../api/tvmaze';
import { searchForPeople } from './../api/tvmaze';

const Home = () => {
  const [SearchStr, setSearchStr] = useState('');
  const [apiData, setapiData] = useState(null);
  const [apiDataError, setapiDataError] = useState(null);
  const [searchOption, setsearchOption] = useState('shows');

  const onSearchonInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadiochange = ev => {
    setsearchOption(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    try {
      setapiDataError(null);
      if (searchOption === 'shows') {
        const result = await searchForShows(SearchStr);
        setapiData(result);
      } else {
        const result = await searchForPeople(SearchStr);
        setapiData(result);
      }
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
      <form onSubmit={onSearch}>
        <input type="text" value={SearchStr} onChange={onSearchonInputChange} />

        <label>
          Shows
          <input
            type="radio"
            name="search-options"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadiochange}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-options"
            value="Actors"
            checked={searchOption === 'actors'}
            onChange={onRadiochange}
          />
        </label>

        <button type="submit">Search</button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
