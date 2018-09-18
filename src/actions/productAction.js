import ajax from '../base/ajax';

export const listShow = () => (dispatch) => {
  ajax({
    url: '/list',
    ok: (response) => {
      dispatch({type: 'GET_LIST', payload: response.data});
    },
  });
}

export const detailShow = () => (dispatch) => {
  ajax({
    url: '/detail',
    ok: (response) => {
      dispatch({type: 'GET_DETAIL', payload: response.detail});
    },
  });
}