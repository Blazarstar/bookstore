const cloud = require('wx-server-sdk')
cloud.init({})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('mybook').where({
      _openid: "o4fp35EDtcAVJcDqPUdz5hNCMtpE"
    })
      .update({
        data: {
          price: "模拟元"
        },
      })
  } catch (e) {
    console.error(e)
  }
}
