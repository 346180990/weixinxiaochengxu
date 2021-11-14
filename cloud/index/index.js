// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()


// 云函数入口函数
exports.main = async (event, context) => {
    try {
        console.log("执行开始")
        const db = cloud.database();
        const wxContext = cloud.getWXContext()
        const _ = db.command
        db.collection('data').where({
            date: _.lt(new Date().getTime())
        }).remove();
        console.log("执行结束")
        return "ok"
        
     }catch(err){
        console.log(err)
    }
}