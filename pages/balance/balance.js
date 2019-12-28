// pages/balance/balance.js
Page({

  /**
   * 页面的初始数据
   */
  recharge:function(){
    wx.navigateTo({
      url: '../recharge/recharge',
    })
  },
  back:function(){
    wx.switchTab({
      url: '../personal/personal',
    })
  },
  data: {
    my: '账户余额',
    ico: 'iconfont ico icon-fanhuijiantou',
    balance:'我的余额(元)',
    money:'1234.56',
    login:'充值'
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