var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'U4EBZ-5CYWI-PPMG7-5XADL-PQ2MQ-OVB5E'
      //自己的key秘钥 http://lbs.qq.com/console/mykey.html 在这个网址申请
    });
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
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.getLocal(res.latitude, res.longitude)//调用函数
        that.setData({
          jingdu: res.longitude,
          weidu: res.latitude
        })
      },
    })
  },
  // 获取当前地理位置
  getLocal: function (latitude, longitude) {
    let that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        // console.log(JSON.stringify(res));
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        let qu = res.result.ad_info.district;
        that.setData({
          province: province,
          city: city,
          qu: qu,
          latitude: latitude,
          longitude: longitude
        })

      },
      fail: function (res) {
        console.log("失败：" + res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
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

  },

})