import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/index';
import './product.less';

class Product extends React.Component {
  componentDidMount() {
    this.props.action.listShow();
  }
  detail(v) {
    const {isLogin} = this.props.login;
    if (isLogin) {
      this.props.action.detailShow();
    } else {
      this.props.history.push('/login');
    }
  }
  render() {
    const {
      product,
      login,
    } = this.props;
    const {
      productList = [],
      detail,
    } = product;
    const {isLogin} = login;
    return (
      <div className="product-wrap">
        <h2>产品列表页面</h2> 
        <ul className="product-list">
          {
            productList.map((v, i) => (
              <li key={i}>{v.desc} <span onClick={() => this.detail(v)}>点击查看详情</span></li>
            ))
          }
        </ul>
        <br />
        {
          isLogin && detail && <p>{detail}</p>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    product: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(Actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);