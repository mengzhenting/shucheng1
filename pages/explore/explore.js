// pages/explore/explore.js
Page({

  /**
   * 页面的初始数据
   */
  aa:function(){
    this.setData({
      none:!this.data.none
    })
  },
  si:function(){
    this.setData({
      none: !this.data.none
    })
  },
  data: {
    explore: '探索',
    bookname: '三体：死神永生',
    name: '刘慈心',
    number: '457人已阅读',
    dong: '陈小冬',
    recommend: '推荐',
    none:true,
    imgs: [{
        src: '../../img/images/images/tansuo1_3.png'
      },
      {
        src: '../../img/images/images/tansuo1_5.png'
      },
      {
        src: '../../img/images/images/tansuo1_7.png'
      },
      {
        src: '../../img/images/images/tansuo1_9.png'
      }
    ],
    explore: '探索',
    hand1: true,
    hand2: false,
    img: [{
        src: '../../img/images/images/tansuo2_10.png',
        title: '未来简史'
      },
      {
        src: '../../img/images/images/tansuo2_3.png',
        title: '三体:死神永生'
      },
      {
        src: '../../img/images/images/tansuo2_9.png',
        title: '平凡的世界'
      },
      {
        src: '../../img/images/images/tansuo2_5.png',
        title: '百年孤独'
      }
    ]
  },
  handler: function() {
    this.setData({
      hand1: true,
      hand2: false
    })
  },
  handler1: function() {
    this.setData({
      hand1: false,
      hand2: true
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