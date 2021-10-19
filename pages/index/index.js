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
    userInfo: {},
    localclick: true,
    name: "",
    inputValue: ""
  },
  onShow: function () {

  },
  onLoad: function (options) {
    wx.cloud.init()
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    if (this.data.name != "" && this.data.inputValue != "") {
      this.setData({
        localclick: false,
      })
    } else {
      this.setData({
        localclick: true,
      })
    }
  },
  getUserProfile (e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          name: res.userInfo.nickName,
        })
        if (this.data.inputValue != "" && this.data.name != "") {
          this.setData({
            localclick: false,
          })
        } else {
          this.setData({
            localclick: true,
          })
        }
      }
    })
  },
  //选择位置位置 
  xzweizhi: function () {
    const inputValue = this.data.inputValue;
    const name = this.data.name;
    wx.chooseLocation({
      success: function (res) {
        const db = wx.cloud.database();
        db.collection('data').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            code: inputValue,
            name: name,
            jingdu: res.longitude,
            weidu: res.latitude,
            date: new Date().getTime(),
          },
          success: function (res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            console.log(res)
          }
        });
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
