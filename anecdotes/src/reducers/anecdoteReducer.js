export const likeAnecdote = (id) => ({
  type: 'ADD_LIKE',
  data: {
    id,
  },
});

export const initializeAnecdotes = (anecdotes) => ({
  type: 'INIT_ANECDOTES',
  data: anecdotes,
});

export const createAnecdote = (anecdote) => ({
  type: 'ADD_ANECDOTE',
  data: {
    anecdote,
  },
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return state.map((anecdote) => {
        if (anecdote.id === action.data.id) {
          return { ...anecdote, votes: anecdote.votes + 1 };
        }

        return anecdote;
      });
    case 'ADD_ANECDOTE':
      return [...state, action.data.anecdote];
    case 'INIT_ANECDOTES':
      return action.data;
    default:
      return state;
  }
};

export default reducer;
