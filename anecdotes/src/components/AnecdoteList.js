import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeAnecdote } from '../reducers/anecdoteReducer';
import { clearMessage, setMessage } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const filter = useSelector((state) => state.filter.toLowerCase());
  const anecdotes = useSelector((state) => state.anecdotes
    .sort((a, b) => (a.votes > b.votes ? -1 : 1))
    .filter((a) => a.content.toLowerCase().includes(filter)));
  const dispatch = useDispatch();

  const vote = (anecdote) => {
    console.log('vote', anecdote.id);
    dispatch(likeAnecdote(anecdote.id));
    dispatch(setMessage(
      `you voted ${anecdote.content}`,
      setTimeout(() => dispatch(clearMessage()), 5000),
    ));
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
