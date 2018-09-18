const initialState = {
  listName: '产品列表',
  productList: [],
  detail: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        productList: action.payload,
      };
    case 'GET_DETAIL': {
      return {
        ...state,
        detail: action.payload,
      }
    }
    default:
      return state;
  }
};