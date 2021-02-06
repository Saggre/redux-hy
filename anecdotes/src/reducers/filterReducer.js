export const setFilter = (text) => ({
  type: 'SET_FILTER',
  data: {
    text,
  },
});

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.data.text;
    default:
      return state;
  }
};

export default reducer;
