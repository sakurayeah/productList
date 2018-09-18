import ajax from '../base/ajax';

export const homeInit = () => (dispatch) => {
  ajax({
    url: '/init',
    ok: (response) => {
      dispatch({type: 'GET_INIT', payload: response.data});
    },
  });
}
