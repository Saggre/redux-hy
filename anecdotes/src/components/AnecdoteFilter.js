import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const AnecdoteFilter = (props) => {
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter
      <input type="text" onChange={(event) => props.setFilter(event.target.value)} />
    </div>
  );
};

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(AnecdoteFilter);
