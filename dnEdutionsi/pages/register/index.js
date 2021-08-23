// pages/register/index.js
import { register } from '../../utils/http/register.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      name: '',
      QQ: '',
      mobile: '',
      sex: 1,
      pwd: '',
      pwdd: '',
      code: '',
    },
    imgValidateCode: 0,
    accounts: ["男", "女", "其他"],
    accountIndex: 0
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
  bindAccountChange(e) {
    this.data.formData.sex = e.detail.value
    this.setData({
    accountIndex: e.detail.value,
    formData: this.data.formData
  })
  },
  submitForm (){
    let str = ''
   for (const key in this.data.formData) {
     if (!this.data.formData[key]) {
       str = '消息不完整'
     }
   }
   if(this.data.formData.pwd !== this.data.formData.pwdd) {
    str = '两次密码不一致'
   }
    let config = {
      method: 'POST',
      header: {"Content-Type":"application/x-www-form-urlencoded"},
      url: 'https://test.zhaoxiedu.net/api/User/AddUser/',
      data:this.data.formData
    }
    register(config).then((res) => {
      if(res.statusCode!=200) {
        str = res.data
        this.changeCode()
      }else {
        str = '注册成功'
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    })
    wx.showToast({
      title: str,
      icon: 'error',
      duration: 2000
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