const initialState = {
  welcome: '亲，早上好',
  userInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_INIT':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
