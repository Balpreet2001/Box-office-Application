import { useState } from 'react';
import { useSearchStr } from '../lib/usepersistedSearch';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchOption, setsearchOption] = useState('shows');

  const [SearchStr, setSearchStr] = useSearchStr();

  const onSearchonInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadiochange = ev => {
    setsearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      query: SearchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={SearchStr} onChange={onSearchonInputChange} />

        <CustomRadio
          label="shows"
          name="search-options"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadiochange}
        />

        <CustomRadio
          label="Actors"
          name="search-options"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadiochange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
