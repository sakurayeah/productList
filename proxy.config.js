module.exports = {
  'GET /init': {
    stat: "ok",
    data: {
      'welcome': '蓝蓝，早上好'
    }
  },
  'GET /list': {
    stat: "ok",
    data: [
      {
        'desc': '产品1'
      },
      {
        'desc': '产品2'
      },
      {
        'desc': '产品3'
      },
    ]
  },
  'GET /login': {
    stat: 'ok',
    userInfo: {
      username: '蓝北鼻',
      tel: 123456789,
      email: 'lanbeibi@163.com',
    }
  },
  'GET /detail': {
    stat: 'ok',
    detail: '产品描述如下'
  }
};
