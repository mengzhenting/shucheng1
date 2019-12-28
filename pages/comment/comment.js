// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  mai: function() {
    wx.navigateTo({
      url: '../shopping/shopping',
    })
  },
  icon: function() {
    wx.switchTab({
      url: '../homepage/homepage',
    })
  },
  all: function() {
    wx.navigateTo({
      url: '../commentAll/commentAll',
    })
  },
  data: {
    add: true,
    describe: '已经将这本书加入到个人书架',
    share: true,
    picture: '../../img/images/images/tansuo2_3.png',
    well: '好的',
    cancel: 'iconfont icon-chahao cancel',
    trysee: '试看',
    purchase: '购买',
    img1: '../../img/images/images/tansuo1_3.png',
    name1: '你个废物',
    content: '十万年前，地球上至少有六种不同的人但今日，世界舞台为什么只剩下了我们自己？从只能啃食虎狼吃剩的残骨的猿人，到跃居食物链顶端的智人，从雪维洞穴壁上的原始人手印，到阿姆斯壮踩上月球的脚印，',
    time: '12-04 21:20',
    numbers: '134',
    num: '89',
    shu: 'iconfont icon-shuxiecopy',
    discuss: '评论',
    several: '215条评论',
    catalog: '查看详情',
    arrow: 'iconfont icon-arrow-right',
    details: '详情',
    title: '十万年前，地球上至少有六种不同的人但今日，世界舞台为什么只剩下了我们自己？\n从只能啃食虎狼吃剩的残骨的猿人，到跃居食物链顶端的智人，\n从雪维洞穴壁上的原始人手印，到阿姆斯壮踩上月球的脚印，',
    img: '../../img/images/images/tansuo2_3.png',
    bookname: '三体：死神永生',
    writername: '作者：刘慈心',
    about: '十万年前，地球上至少有六种不同的人但今日，世界舞台为什么只剩下了我们自己？\n从只能啃食虎狼吃剩的残骨的猿人，到跃居食物链顶端的智人，\n从雪维洞穴壁上的原始人手印，到阿姆斯壮踩上月球的脚印，',
    number: '5.0',
    items: true,
    item: true,
    collec: '收藏',
    collection: '分享',
    collecs: '放入书架',
    icon: [{
        iconf: 'iconfont icon-wujiaoxingxingxingshoucang'
      },
      {
        iconf: 'iconfont icon-wujiaoxingxingxingshoucang'
      },
      {
        iconf: 'iconfont icon-wujiaoxingxingxingshoucang'
      },
      {
        iconf: 'iconfont icon-wujiaoxingxingxingshoucang'
      },
      {
        iconf: 'iconfont icon-wujiaoxingxingxingshoucang'
      }
    ]
  },
  aa: function() {
    this.setData({
      item: !this.data.item
    })
  },
  dd: function() {
    this.setData({
      items: !this.data.items
    })
  },
  bb: function() {
    this.setData({
      share: !this.data.share
    })
  },
  cc: function() {
    this.setData({
      add: !this.data.add
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