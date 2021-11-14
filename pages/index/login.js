// pages/index/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit: function (e) {
    console.log(e.detail.value);
    //对内容进行正则判断
    if (e.detail.value.no == "10203787") {
      //if(e.detail.value.no=="administratorLX"){
      //管理员跳转
      this.setData({
        text: ""
      })
      wx.navigateTo({
        url: '/pages/index/adminJump'
      })
    } else {
      //检查员工信息
      //跳转
      let result = /^10\d{6}$/.test(e.detail.value.no);
      if (result == false) {
        this.setData({
          text: "员工号不对请检查"
        })
        return;
      } else if (result == true) {
        this.setData({
          text: ""
        })
      }
      const db = wx.cloud.database();
      db.collection('employ').where({
        employNo: e.detail.value.no
      }).get()
        .then(res => {
          if (res.data.length == 0) {
            //注册用户
            wx.navigateTo({
              url: '/pages/index/register?employNo=' + e.detail.value.no
            })
          } else {
            //等待权限或者跳转到系统页面
            if (res.data[0].role == "false") {
              wx.navigateTo({
                url: '/pages/index/waitRule'
              })
            } else if (res.data[0].role == "true") {
              wx.switchTab({
                url: '/pages/index/index?employNo=' + res.data[0].employNo + '&name=' + res.data[0].name
              })
            }
          }
        }
        )
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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