const initialState = {
  users: [],
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return { ...state, users: action.data.users };
    case 'GET_USER_FAIL':
      return { ...state, error: action.message };
    default:
      return state;
  }
};

export default users;
