export const Types = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAIL: 'GET_USERS_FAIL',
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: Types.GET_USERS_SUCCESS,
  users,
});

export const getUsersFail = (error) => ({
  type: Types.GET_USERS_FAIL,
  message: error.message,
});
