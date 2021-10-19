// pages/index/index2.js
const util = require("../../utils/util")
const app = getApp()
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
    app.getUserInfo().then(viewList => {
      let viewLists = [];
      for (let ele of viewList) {
        ele.date = util.dataForm(parseInt(ele.date));
        viewLists.push(ele);
      }
      this.setData({
        listData: viewLists
      })
    })

    //也可以借助async函数, 因为setUserInfo中使用了setData，所以需要借助call来调用
    //app.setUserInfo().call(this)
  },
  click: function (event) {
    let index = parseInt(event.currentTarget.dataset.index);
    console.log(this.data.listData[index]);
    let jingdu = this.data.listData[index].jingdu;
    let weidu = this.data.listData[index].weidu;
    console.log(jingdu);
    console.log(weidu);
    wx.openLocation({
      latitude: weidu,
      longitude: jingdu,
      scale: 18
    }) 
  },
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */


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
    app.getUserInfo().then(viewList => {
      let viewLists = [];
      for (let ele of viewList) {
        ele.date = util.dataForm(parseInt(ele.date));
        viewLists.push(ele);
      }
      this.setData({
        listData: viewLists
      })
    })

    //也可以借助async函数, 因为setUserInfo中使用了setData，所以需要借助call来调用
    //app.setUserInfo().call(this)
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