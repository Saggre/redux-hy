import anecdoteService from '../services/anecdotes';

export const likeAnecdote = (id) => async (dispatch) => {
  const anecdote = await anecdoteService.addLike(id);
  dispatch({
    type: 'ADD_LIKE',
    data: {
      anecdote,
    },
  });
};

export const initializeAnecdotes = () => async (dispatch) => {
  const anecdotes = await anecdoteService.getAll();
  dispatch({
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  });
};

export const createAnecdote = (content) => async (dispatch) => {
  const anecdote = await anecdoteService.createNew(content);
  dispatch({
    type: 'ADD_ANECDOTE',
    data: {
      anecdote,
    },
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return state.map((anecdote) => (anecdote.id === action.data.anecdote.id ? action.data.anecdote : anecdote));
    case 'ADD_ANECDOTE':
      return [...state, action.data.anecdote];
    case 'INIT_ANECDOTES':
      return action.data;
    default:
      return state;
  }
};

export default reducer;
