import { getPersonalList } from '../../utils/http/personal.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgBaseUrl: 'https://www.zhaoxiedu.net',
    vipList:[],
    ptList:[],
    videoList:[],
    token: ''
  },

  outLogin() {
    wx.showModal({
      title: '退出登录',
      content: '是否退出登录',
      success (res) {
        if (res.confirm) {
          wx.removeStorage({
            key: 'token'
          })
          wx.redirectTo({
            url: '/pages/login/index',
          })
        }
      }
    })
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 4
        })
      }
      wx.getStorage({
        key: 'token',
        success: (res) =>{
          this.setData({
            token: res.data
          })
        }
      })
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