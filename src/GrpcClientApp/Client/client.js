const { HelloRequest, HelloReply } = require('./hello_pb.js');
const { GreeterClient } = require('./hello_grpc_web_pb.js');

var client = new GreeterClient('https://localhost:5001');

global.sayHello = function sayHello(to, callback) {
  var request = new HelloRequest();
  request.setName(to);

  client.sayHello(request, {}, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
      callback(response.getMessage())
    }
  });
}
