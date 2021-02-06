import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer';
import StatisticGroup from './Components/StatisticGroup';

const store = createStore(reducer);

const App = () => {
  const addFeedback = (type) => {
    store.dispatch({
      type: type,
    });
  };

  const resetFeedback = () => addFeedback('ZERO');
  const state = store.getState();

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => addFeedback('GOOD')}>good</button>
      <button onClick={() => addFeedback('OK')}>neutral</button>
      <button onClick={() => addFeedback('BAD')}>bad</button>
      <button onClick={resetFeedback}>reset stats</button>
      <StatisticGroup
        good={state.good}
        bad={state.bad}
        neutral={state.ok}
      />
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App/>, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);
