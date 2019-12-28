// pages/authorDetails/authorDetails.js
Page({

  /**
   * 页面的初始数据
   */
  tiao: function() {
    wx.navigateTo({
      url: '../author/author',
    })
  },
  data: {
    tu: 'tu iconfont icon-fanhuijiantou',
    img: '../../img/images/images/tansuo1_3.png',
    icon: 'icon iconfont icon-fenxiang',
    icond: 'icond iconfont icon-jiahao-',
    my: '作者',
    share: '分享',
    share1: '关注',
    name: '余秋雨',
    address: '中国 · 保康',
    list: '8888',
    list1: '8888',
    list2: '8888',
    follow: '关注',
    fans: '粉丝',
    like: '喜欢',
    representative:'代表作',
    science:'总共3本书',
    list3:[
      {
        touxiang: '../../img/images/images/tansuo2_10.png',
        bookname:'鱼王',
        score:'5.0',
        dian:'iconfont icon-wujiaoxingxingxingshoucang dian',
        writername:'432人阅读',
        about:'十万年前，地球上至少有六种不同的人但今日，世界舞台为什么只剩下了我们自己？从只能啃食虎狼吃剩的残骨的猿人，到跃居食物链顶端的智人，从雪维洞穴壁上的原始人手印，到阿姆斯壮踩上月球的脚印，',
      }
    ]
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