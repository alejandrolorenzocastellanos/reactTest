const initialState = {
  users: [],
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return { ...state, users: action.users };
    case 'GET_USERS_FAIL':
      return { ...state, error: action.message };
    default:
      return state;
  }
};

export default users;
