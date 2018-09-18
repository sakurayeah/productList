import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import Actions from '../../actions/index';
import './menuBar.less';

class MenuBar extends React.Component  {
  checkout() {
    this.props.action.userCheckout();
  }
  render() {
    const { isLogin } = this.props.login;
    return (
      <div>
        <ul className="menu-bar">
          <li><Link to="/">首页</Link></li>
          <li><Link to="/product">产品列表</Link></li>
          {
            !isLogin && <li><Link to="/login">登录</Link></li>
          }
          {
            isLogin && <li onClick={() => this.checkout()}>退出</li>
          }
        </ul>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(Actions, dispatch)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuBar));
