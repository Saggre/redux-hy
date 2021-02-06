import React from 'react';
import PropTypes from 'prop-types';
import Statistic from './Statistic';

const StatisticGroup = ({good, neutral, bad}) => {
  const getAverage = () => {
    return (good - bad) / Math.max(getCount(), 1);
  };

  const getCount = () => {
    return good + neutral + bad;
  };

  const getPositive = () => {
    return good / Math.max(getCount(), 1);
  };

  if (getCount() === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <table>
      <tbody>
        <Statistic value={good} text='good'/>
        <Statistic value={neutral} text='neutral'/>
        <Statistic value={bad} text='bad'/>
        <Statistic value={getCount()} text='all'/>
        <Statistic value={getAverage()} text='average'/>
        <Statistic value={(getPositive() * 100) + ' %'} text='positive'/>
      </tbody>
    </table>
  );
};

StatisticGroup.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default StatisticGroup;
