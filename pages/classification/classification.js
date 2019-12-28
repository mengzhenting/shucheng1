// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  home: function() {
    wx.switchTab({
      url: '../homepage/homepage',
    })
  },
  data: {
    classify: '分类',
    list: ['科幻', '职场', '言情', '艺术', '科学', '军事', '都市', '古典'],
    indicatorDots: false, //是否显示面板指示点
    indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
    indicatorActiveColor: "#007aff", //当前选中的指示点颜色
    autoplay: false, //是否自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    circular: true, //是否采用衔接滑动
    circular: true,
    rank2: '新上架',
    all: '查看全部',
    rank3:'热门',
    list2: [{
        touxiang: '../../img/images/images/tansuo2_10.png',
        bookname: '三体：死神永生',
        writername: '刘慈心'
      },
      {
        touxiang: '../../img/images/images/tansuo2_3.png',
        bookname: '三体：死神永生',
        writername: '刘慈心'
      },
      {
        touxiang: '../../img/images/images/tansuo2_5.png',
        bookname: '三体：死神永生',
        writername: '刘慈心'
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