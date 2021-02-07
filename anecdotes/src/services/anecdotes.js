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

export default { getAll, createNew };
