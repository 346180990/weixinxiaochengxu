//index.js
//获取应用实例
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
const app = getApp()

Page({
  data: {
    jingdu: "",
    weidu: "",
    dizhi: "",
    mingcheng: "",
    userInfo:{},
    localclick: true,
    name:""
  },
  onShow: function () {

  },
 onLoad: function (options) {

 },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          name:res.userInfo.nickName,
          localclick: false,
        })
      }
    })
  },
  //选择位置位置 
  xzweizhi: function () {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          jingdu: res.longitude,
          weidu: res.latitude,
          dizhi: res.address,
          mingcheng: res.name
        })
        
      },
    })
  }
})
