import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const AnecdoteFilter = () => {
  const dispatch = useDispatch();

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter
      <input type="text" onChange={(event) => dispatch(setFilter(event.target.value))} />
    </div>
  );
};

export default AnecdoteFilter;
