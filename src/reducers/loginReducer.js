const initialState = {
  userInfo: {},
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGIN':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};