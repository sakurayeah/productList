import ajax from '../base/ajax';

// 登录
export const userLogin = (data) => (dispatch) => {
  ajax({
    url: '/login',
    data,
    ok: (response) => {
      dispatch({type: 'GET_LOGIN', payload: {
        userInfo: response.userInfo,
        isLogin: true
      }});
    },
  });
}

// 退出登录
export const userCheckout = (data) => (dispatch) => {
  dispatch({type: 'GET_LOGIN', payload: {
    userInfo: {},
    isLogin: false
  }});
}