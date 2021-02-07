import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

/**
 * Get all anecdotes
 * @returns {Promise<any>}
 */
const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

/**
 * Get a single anecdote
 * @returns {Promise<any>}
 */
const getSingle = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

/**
 * Create a new anecdote
 * @param content
 * @returns {Promise<any>}
 */
const createNew = async (content) => {
  const response = await axios.post(baseUrl, {
    content,
    votes: 0,
  });
  return response.data;
};

/**
 * Add like to an anecdote by id
 * @param id
 * @returns {Promise<any>}
 */
const addLike = async (id) => {
  const anecdote = await getSingle(id);
  const response = await axios.put(`${baseUrl}/${id}`, {
    content: anecdote.content,
    votes: anecdote.votes + 1,
  });
  return response.data;
};

export default {
  getAll, createNew, addLike, getSingle,
};
