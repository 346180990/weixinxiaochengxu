// pages/index/index2.js
const util = require("../../utils/util")
Page({
  /**
   * 页面的初始数据
   */

  data: {
    listData: [
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    const fs = wx.getFileSystemManager()
    let a = fs.readFileSync(`${wx.env.USER_DATA_PATH}/data.json`, 'utf8');
    let viewList = []
    for (let ele of JSON.parse(a).data) {
      ele.date = util.dataForm(parseInt(ele.date));
      viewList.push(ele);
    }
    viewList.reverse();
    this.setData({
      listData: viewList
    })

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