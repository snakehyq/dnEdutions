import { getPersonalList } from '../../utils/http/personal.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgBaseUrl: 'https://www.zhaoxiedu.net',
    vipList:[],
    ptList:[],
    videoList:[]
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
    getPersonalList().then((res) => {
      this.setData({
        vipList: res.data.filter(item => item.type===1),
        ptList: res.data.filter(item => item.type===2),
        videoList: res.data.filter(item => item.type===3)
      })
    })
  },
  downLoad() {
    wx.showModal({
      title: '课程资料',
      content: '内容丰富，可以去PC端下载',
      showCancel: false
    })
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