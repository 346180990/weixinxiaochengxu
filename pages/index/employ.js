// pages/index/employ.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
    ],
    viewLists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.stopPullDownRefresh();
    const db = wx.cloud.database();
    const _ = db.command

    db.collection('employ')
      .get().then(res => {
        console.log(res.data);
        this.setData({
          listData: res.data,
          viewLists: res.data
        })
      })
  },
  bindKeyInput: function (e) {
    let input = e.detail.value;
    let newArray = []
    for (let index of this.data.viewLists) {
      if (index.employNo.indexOf(input) != -1) {
        newArray.push(index);
      }
    }
    this.setData({
      listData: newArray
    })
  },
  click: function (event) {
    let index = parseInt(event.currentTarget.dataset.index);
    let employNo = this.data.listData[index].employNo;
    let role = this.data.listData[index].role;
    let name = this.data.listData[index].name;
    let fleet = this.data.listData[index].fleet;
    wx.navigateTo({
      url: '/pages/index/setEmploy?employNo=' + employNo + '&role=' + role + '&name=' + name + '&fleet=' + fleet
    })
  },
  //下拉
  onPullDownRefresh: function () {
    console.log("xiala");
    this.onLoad();
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