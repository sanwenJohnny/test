console.log('test -— hello world!')

let express = require('express');
let app = express();
 
// app.get('api/:id', (req, res) => {
//    console.log('get res params',res.params)
// })

app.post('push', (req,res) => {
  console.log('-----req:',req)
  console.log('-----res:',res)
 
  //res.send(res)
})
 
let server = app.listen(8081, () => {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
