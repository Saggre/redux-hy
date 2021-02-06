import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({value, text}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

Statistic.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

export default Statistic;
