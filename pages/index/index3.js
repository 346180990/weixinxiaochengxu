var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
const chooseLocation = requirePlugin('chooseLocation');
const app = getApp()
Page({
  data: {
    enableSatellite: true,
    latitude: "",
    longitude: "",
    address: "",
    locationName: ""
  },
  onShow: function () {

  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      longitude:options.longitude,
      latitude:options.latitude,
      // address: location.address?location.address : "",
      // locationName: location.name?location.name : ""
  });
  },
  onReady: function (options) {
    this.mapCtx = wx.createMapContext('myMap')
  },

})