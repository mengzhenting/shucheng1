// pages/commentAll/commentAll.js
Page({

  /**
   * 页面的初始数据
   */
  aa: function() {
    this.setData({
      item: !this.data.item
    })
  },
  bb: function () {
    this.setData({
      item1: !this.data.item1
    })
  },
  cc: function () {
    this.setData({
      item2: !this.data.item2
    })
  },
  return: function() {
    wx.navigateTo({
      url: '../comment/comment',
    })
  },
  data: {
    img1: '../../img/images/images/tansuo1_3.png',
    name1: '你个废物',
    content: '十万年前，地球上至少有六种不同的人但今日，世界舞台为什么只剩下了我们自己？从只能啃食虎狼吃剩的残骨的猿人，到跃居食物链顶端的智人，从雪维洞穴壁上的原始人手印，到阿姆斯壮踩上月球的脚印，',
    time: '12-04 21:20',
    numbers: '134',
    num: '89',
    shu: 'iconfont icon-shuxiecopy',
    discuss: ' discuss iconfont icon-fanhuijiantou',
    several: '评论',
    item: true,
    item1: true,
    item2: true,
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