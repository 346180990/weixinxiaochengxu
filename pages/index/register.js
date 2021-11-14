// pages/index/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '车队1', value: '车队1', checked: 'true' },
      { name: '车队2', value: '车队2' },
      { name: '车队3', value: '车队3' },
    ],
    fleet: "",
    employNo: "",
    name: "",
    text: ""
  },
  //保存车队信息
  radioChange: function (e) {
    //保存到data
    this.setData({
      fleet: e.detail.value
    })
  },
  formSubmit: function (e) {
    //对内容进行正则判断
    if (e.detail.value.name == undefined || e.detail.value.name == null || e.detail.value.name == '') {
      this.setData({
        text: "没输入名字"
      });
      return;
    }
    //保存数据到数据库
    const db = wx.cloud.database();
    db.collection('employ').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        employNo: e.detail.value.no,
        name: e.detail.value.name,
        fleet: this.data.fleet,
        role: "false",
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
        wx.navigateTo({
          url: '/pages/index/waitRule'
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      employNo: options.employNo,
      fleet: this.data.items[0].name
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