var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
const chooseLocation = requirePlugin('chooseLocation');
const app = getApp()
Page({
  data: {
    userInfo: {},
    localclick: true,
    name: "",
    latitude: "",
    longitude: "",
    inputValue: "",
    enableSatellite: true,
    address: "",
    addressName: "",
    textCarCode: ""
  },
  onShow: function () {

  },
  onLoad: function (options) {
    this.setData({
      inputValue: options.employNo,
      inputValue: options.employNo,
    })
    let _this = this
    wx.cloud.init()
    wx.authorize({
      scope: 'scope.userLocation',
    })
    wx.getLocation({
      type: 'gcj02',
      altitude: true, //高精度定位
      isHighAccuracy: true,
      success: function (res) {
        // 设置坐标
        console.log(res);
        _this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
      fail: function (err) {
        wx.authorize({
          scope: 'scope.userLocation',
        })
      }
    })
  },
  onReady: function (options) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    if (this.data.inputValue != "") {
      this.setData({
        localclick: false,
      })
    } else {
      this.setData({
        localclick: true,
      })
    }
  },
  // showMap() {
  //   //使用在腾讯位置服务申请的key（必填）
  //   const key = "U4EBZ-5CYWI-PPMG7-5XADL-PQ2MQ-OVB5E"; 
  //   //调用插件的app的名称（必填）
  //   const referer = "app"; 
  //   wx.navigateTo({
  //       url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer
  //   });
  // },
  /**
   * 上传
   */
  upload: function (e) {
    const db = wx.cloud.database();
    db.collection('data').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        code: this.data.inputValue,
        name: res.userInfo.nickName,
        jingdu: this.data.longitude,
        weidu: this.data.latitude,
        date: new Date().getTime(),
        address: this.data.address,
        addressName: this.data.addressName,
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    });
  }
  //获取用户信息
  // getUserProfile (e) {
  //   wx.authorize({
  //     scope: 'scope.userLocation',
  //   })
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res);

  //       this.setData({
  //         userInfo: res.userInfo,
  //         name: res.userInfo.nickName,
  //         text: res.userInfo.nickName+"上传成功!"
  //       })
  //       const db = wx.cloud.database();
  //       db.collection('data').add({
  //         // data 字段表示需新增的 JSON 数据
  //         data: {
  //           code: this.data.inputValue,
  //           name: res.userInfo.nickName,
  //           jingdu: this.data.longitude,
  //           weidu: this.data.latitude,
  //           date: new Date().getTime(),
  //           address:this.data.address,
  //           addressName:this.data.addressName,
  //         },
  //         success: function (res) {
  //           // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
  //           console.log(res)
  //         }
  //       });
  //     }
  //   })
  // },
  // getCenterLocation: function () {
  //   this.mapCtx.getCenterLocation({
  //     success: function (res) {
  //       console.log(res.longitude)
  //       console.log(res.latitude)
  //     }
  //   })
  // },
  // moveToLocation: function () {
  //   this.mapCtx.moveToLocation()
  // },
  //选择位置位置 
  // xzweizhi: function () {
  //   const inputValue = this.data.inputValue;
  //   const name = this.data.name;

  //   wx.chooseLocation({
  //     success: function (res) {


  //     },
  //   })

  // }
})