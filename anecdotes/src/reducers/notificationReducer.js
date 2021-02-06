export const setMessage = (text, timeout) => ({
  type: 'SET_MESSAGE',
  data: {
    text,
    timeout,
  },
});

export const clearMessage = () => ({
  type: 'CLEAR_MESSAGE',
  data: {},
});

const initialState = { text: '', timeout: null };

const endTimeout = (state) => {
  if (state.timeout != null) {
    clearTimeout(state.timeout);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      endTimeout(state);
      return {
        text: action.data.text,
        timeout: action.data.timeout,
      };
    case 'CLEAR_MESSAGE':
      endTimeout(state);
      return initialState;
    default:
      return state;
  }
};

export default reducer;
