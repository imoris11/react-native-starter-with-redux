const { FETCH_USER_SUCCESS, FETCH_USER_ERROR } = require('./actionTypes');

const initialState = {
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
