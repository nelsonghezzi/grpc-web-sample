const { HelloRequest, HelloReply } = require('./hello_pb.js');
const { GreeterPromiseClient } = require('./hello_grpc_web_pb.js');

var client = new GreeterPromiseClient('https://localhost:5001');

global.sayHello = function sayHello(to, callback) {
  var request = new HelloRequest();
  request.setName(to);

  client.sayHello(request, {})
    .then(response => {
      console.log(response);
      callback(response.getMessage())
    })
    .catch(err => {
      console.log(err);
    });
}
