import React from 'react';
import './Search.css';
import { Divider, Input } from 'antd';

// Iteration 5
function Search({ searchString, setSearchString }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={searchString}
        type="text"
        onChange={({ target }) => {
          setSearchString(target.value);
        }}
      />
    </>
  );
}

export default Search;
