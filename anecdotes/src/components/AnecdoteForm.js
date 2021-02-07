import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setMessage } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNew = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    dispatch(createAnecdote(content));
    dispatch(setMessage(`you added ${content}`, 5));
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
