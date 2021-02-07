import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { clearMessage, setMessage } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNew = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(createAnecdote(newAnecdote));
    dispatch(
      setMessage(`you added ${content}`),
      setTimeout(() => dispatch(clearMessage()), 5000),
    );
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div><input type="text" name="content" /></div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
