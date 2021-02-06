import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.sort((a, b) => (a.votes > b.votes ? -1 : 1)));
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log('vote', id);
    dispatch(likeAnecdote(id));
  };

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
            <button type="button" onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
