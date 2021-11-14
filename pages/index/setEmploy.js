// pages/index/setEmploy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: "true", value: '给予权限' },
      { name: "false", value: '撤销权限' },
    ],
    role: "true",
    employNo: "",
    name: "",
    fleet: ""
  },
  /**
   * 设置权限
   * @param {*} e 
   */
  radioChange: function (e) {
    //保存到data
    this.setData({
      role: e.detail.value
    });
  },
  /**
   * 点击确定
   * @param {*} event 
   */
  act: function (event) {
    const db = wx.cloud.database();
    db.collection('employ').where({
      employNo: this.data.employNo
    }).update({
      data: {
        role: this.data.role
      }
    }).then(res => {
      wx.navigateBack(
        {
          success: function (e) {
            var page = getCurrentPages().pop(); //当前页面
            page.onLoad(); //或者其它操作
          }
        })
    })
  },
  /**
 * 点击确定
 * @param {*} event 
 */
  delete: function (event) {
    const db = wx.cloud.database();
    db.collection('employ').where({
      employNo: this.data.employNo
    }).remove().then(res => {
      wx.navigateBack(
        {
          success: function (e) {
            var page = getCurrentPages().pop(); //当前页面
            page.onLoad(); //或者其它操作
          }
        })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //保存员工号
    this.setData({
      employNo: options.employNo,
      name: options.name,
      fleet: options.fleet
    });
    if (options.role == "false") {
      console.log("fasle")
      this.setData({
        items: [
          { name: "true", value: '给予权限' },
          { name: "false", value: '撤销权限', checked: 'true' },
        ]
      });
    } else if (options.role == "true") {
      console.log("true")
      this.setData({
        items: [
          { name: "true", value: '给予权限', checked: 'true' },
          { name: "false", value: '撤销权限' },
        ]
      });
    }
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