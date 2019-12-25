// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  longpress: function() {
    wx.navigateTo({
      url: '../fiction/fiction',
    })
    console.log(1)
  },
  data: {
    search: '热门搜索',
    labArr: ['2018排行榜', '职场热门', '都市言情', '哈佛大学经济管理类', '领导才能'],
    // 自定义自己喜欢的颜色
    colorArr: ["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100",
      "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
      "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
      "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
      "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"
    ],
    // 存储随机颜色
    // randomColorArr: [],
    rank: '分类排行',
    all: '查看全部',
    rank1: '作者排行',
    rank2: '新发布',
    rank3: '热销榜',
    list1: [],
    list: [],
    list2: [],
    indicatorDots: false, //是否显示面板指示点
    indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
    indicatorActiveColor: "#007aff", //当前选中的指示点颜色
    autoplay: false, //是否自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    circular: true, //是否采用衔接滑动
    circular: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://wujunhui.xyz/getfenleilist',
      success: (res) => {
        this.setData({
          list: res.data
          // list1: res.data.splice(0, 5),
          // list2: res.data.splice(5)
        })
      },
    })
    wx.request({
      url: 'https://wujunhui.xyz/getwriters',
      success: (res) => {
        this.setData({
          list1: res.data
        })
      },
    })

    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res) => {
        this.setData({
          list2: res.data
        })
      },
    })
    //随机颜色
    this.setData({
      colorArr: this.data.colorArr.sort((a, b) => {
        return Math.random() - 0.5
      })
    })

    // let that = this,
    //   labLen = that.data.labArr.length,
    //   colorArr = that.data.colorArr,
    //   colorLen = colorArr.length,
    //   randomColorArr = [];
    // //判断执行
    // do {
    //   let random = colorArr[Math.floor(Math.random() * colorLen)];
    //   randomColorArr.push(random);
    //   labLen--;
    // } while (labLen > 0)

    // that.setData({
    //   randomColorArr: randomColorArr
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
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