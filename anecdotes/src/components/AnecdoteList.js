import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeAnecdotes, likeAnecdote } from '../reducers/anecdoteReducer';
import { setMessage } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  const filter = useSelector((state) => state.filter.toLowerCase());
  const anecdotes = useSelector((state) => state.anecdotes
    .sort((a, b) => (a.votes > b.votes ? -1 : 1))
    .filter((a) => a.content.toLowerCase().includes(filter)));

  const vote = (anecdote) => {
    dispatch(likeAnecdote(anecdote.id));
    dispatch(setMessage(`you voted ${anecdote.content}`, 5));
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
            <button type="button" onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
