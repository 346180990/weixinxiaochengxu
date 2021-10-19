//app.js

App({
  globalData: {},
  onLaunch: function () {
    wx.cloud.init()
  },
  getUserInfo () {
    return new Promise((resolve, reject) => {
      let viewList = this.globalData.viewList
      if (viewList) {
        resolve(viewList)
      } else {
        const db = wx.cloud.database();
        const _ = db.command
        //let viewList = [];

        db.collection('data').where({
          // 查看一周内数据
          date: _.gt(new Date().getTime() - 60 * 60 * 60 * 24 * 7)
        })
          .get({
            success: function (res) {
              viewList = res.data
              resolve(res.data)
              //res.data[0].name 
            }
          })
      }

    })

  },
  async setUserInfo () {
    this.setData({
      userInfo: await app.getUserInfo()
    })
  }
})