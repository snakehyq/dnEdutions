// pages/login/index.js
import { Login } from '../../utils/http/login.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      QQ: '',
      pwd: '',
      code: '',
    },
    imgValidateCode: 0
  },
  formInputChange(e) {
    this.data.formData[e.currentTarget.dataset.field] = e.detail.value
    this.setData({
      formData:this.data.formData
    })
  },
  changeCode() {
    this.setData({
      imgValidateCode: this.data.imgValidateCode+1
    })
  },
  submitForm (){
    if(!this.data.formData.QQ || !this.data.formData.pwd || !this.data.formData.code) {
      return wx.showToast({
        title: '消息不完整',
        icon: 'error',
        duration: 2000
      })
    }
    let config = {
      method: 'POST',
      header: {"Content-Type":"application/x-www-form-urlencoded"},
      url: 'https://test.zhaoxiedu.net/api/Login/CheckLogin',
      data:this.data.formData
    }
    Login(config).then((res) => {
      wx.setStorage(({
        key:'token',
        data: 'dsfjslasdhadlaiwnakscnakfalsfaslfasfafasfbkjasfhaskjlfhwi'
      }))
      if(res.statusCode!=200) {
        wx.showToast({
          title: res.data,
          icon: 'error',
          duration: 2000
        })
        this.changeCode()
      }else {
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000
        })
        wx.setStorage(({
          key:'token',
          data: 'dsfjslasdhadlaiwnakscnakfalsfaslfasfafasfbkjasfhaskjlfhwi'
        }))
        wx.redirectTo({
          url: '/pages/index/index'
        })
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