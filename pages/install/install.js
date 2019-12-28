// pages/install/install.js
Page({

  /**
   * 页面的初始数据
   */
  back:function(){
    wx.switchTab({
      url: '../personal/personal',
    })
  },
  data: {
    ico:'iconfont ico icon-fanhuijiantou',
    my:'设置',
    rank:'查看账户',
    rank1:'个人资料',
    rank2:'消息提醒',
    rank3:'清理缓存',
    rank4:'帮助中心',
    rank5:'关于我们',
    cache:'128MB',
    login:'退出登录'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})