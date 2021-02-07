import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setMessage } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const addNew = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    props.createAnecdote(content);
    props.setMessage(`you added ${content}`, 5);
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

const mapDispatchToProps = {
  createAnecdote,
  setMessage,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
