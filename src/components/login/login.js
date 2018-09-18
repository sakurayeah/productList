import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Actions from '../../actions/index';
import './login.less';

class Login extends React.Component {
  login() {
    const userVal = this.user.value;
    const pswVal = this.psw.value;
    if (userVal && pswVal) {
      this.props.action.userLogin({
        username: userVal,
        password: pswVal
      });
    } else {
      alert('用户名或密码不能为空')
    }
  }
  componentDidUpdate() {
    const { isLogin } = this.props.login;
    if ( isLogin ) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div className="login-wrap">
        <h2 className="line">登录页面</h2>
        <div className="line">
          <label>用户名</label>
          <input ref={(e) => { this.user = e; }}/>
        </div>
        <div className="line">
          <label>密码</label>
          <input ref={(e) => { this.psw = e; }} />
        </div>
        <p className="btn" onClick={() => this.login()}>登录</p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));