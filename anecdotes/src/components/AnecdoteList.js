import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeAnecdotes, likeAnecdote } from '../reducers/anecdoteReducer';
import { setMessage } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  useEffect(() => {
    props.initializeAnecdotes();
  }, [props]);

  const vote = (anecdote) => {
    props.likeAnecdote(anecdote.id);
    props.setMessage(`you voted ${anecdote.content}`, 5);
  };

  const { anecdotes } = props;

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has
            {' '}
            {anecdote.votes}
            <button type="button" onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  const filter = state.filter.toLowerCase();
  return {
    anecdotes: state.anecdotes
      .sort((a, b) => (a.votes > b.votes ? -1 : 1))
      .filter((a) => a.content.toLowerCase().includes(filter)),
  };
};

const mapDispatchToProps = {
  initializeAnecdotes,
  likeAnecdote,
  setMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
