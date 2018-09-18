import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions/index';
import './home.less';

class Home extends React.Component  {
  componentDidMount() {
    this.props.action.homeInit();
  }
  render() {
    const {
      home,
      login,
    } = this.props;
    const {
      welcome
    } = home;
    const {
      userInfo,
      isLogin,
    } = login;
    const {
      username,
      email,
      tel,
    } = userInfo;
    return (
      <div>
        {isLogin ? `${username}，欢迎来到主页` : welcome}
        {
          isLogin && <div>
            <p>个人信息</p>
            <div><label>邮箱：</label>{email}</div>
            <div><label>电话：</label>{tel}</div>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    home: state.home,
    login: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(Actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
