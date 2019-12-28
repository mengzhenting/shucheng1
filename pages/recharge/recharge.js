// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  etc: function() {
    wx.navigateTo({
      url: '../balance/balance',
    })
  },
  data: {
    aa: true,
    my: '充值',
    ico: 'iconfont ico icon-fanhuijiantou',
    aa: 'iconfont iconf icon-chahao',
    balance: '我的余额(元)',
    money: '',
    login: '下一步',
    balance: '确认支付(元)',
    money: '250.00',
    rank: '订单信息',
    rank1: '付款方式',
    arrow1: '中国银行(0288)',
    arrow: '充值',
    verification: '指纹验证或',
    password: '输入密码',
    wen: 'wen iconfont icon-zhiwen',
    hiddenName: true
  },
  block: function() {
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})