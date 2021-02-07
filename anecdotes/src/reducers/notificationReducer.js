export const setMessage = (text, seconds) => async (dispatch) => {
  dispatch({
    type: 'SET_MESSAGE',
    data: text,
  });
  await new Promise((a) => setTimeout(a, seconds * 1000));
  dispatch({
    type: 'CLEAR_MESSAGE',
    data: text,
  });
};

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.data;
    case 'CLEAR_MESSAGE':
      return action.data === state ? '' : state;
    default:
      return state;
  }
};

export default reducer;
