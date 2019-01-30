var Resource = require('./resource');

var r=new Resource(5);

r.on("start",function(){
  console.log("i have started");
});

r.on("data",function(d){
  console.log("i received data - " + d);
});

r.on("end",function(){
  console.log("i have ended");
});
