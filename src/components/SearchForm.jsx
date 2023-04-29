import { useState } from 'react';


const SearchForm = ( {onSearch} ) => {
  const [searchOption, setsearchOption] = useState('shows');
  const [SearchStr, setSearchStr] = useState('');

  const onSearchonInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadiochange = ev => {
    setsearchOption(ev.target.value);
  };

  const onSubmit = ev =>{
     ev.preventDefault();

     const options = {
          query: SearchStr ,
          searchOption
     }

     onSearch(options)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
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
    </div>
  );
};

export default SearchForm;
