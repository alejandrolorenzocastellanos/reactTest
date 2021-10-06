export const getUsers = () => ({
  type: 'GET_USER_REQUEST',
});

export const Types = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { users },
});

export const getUsersFail = (error) => ({
  type: 'GET_USER_FAIL',
  message: error.message,
});
