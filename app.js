//app.js
App({
  onLaunch: function () {
    const fs = wx.getFileSystemManager()
    let data = {
      "data": [
        { "code": "0156789", "name": "liuyang", "date": "1398250549490" },
        { "code": "0156789", "name": "liuyang", "date": "1398250559490" },
        { "code": "0156789", "name": "liuyang", "date": "1522117495730" }
      ]
    }
    fs.writeFileSync(`${wx.env.USER_DATA_PATH}/data.json`, JSON.stringify(data), 'utf8')
  }
})