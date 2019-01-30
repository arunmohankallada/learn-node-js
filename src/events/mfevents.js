var EventEmitter = require('events').EventEmitter;

var getResource = function(c){
var e=new EventEmitter();
process.nextTick(function(){
  var count =0;
  e.emit('start');
  var t=setInterval(function(){
    e.emit('data',++count);
    if(count==c){
      e.emit('end');
      clearInterval(t);
    }
  },10);
});
return(e);
};

var r=getResource (5);

r.on("start",function(){
  console.log("i have started");
});

r.on("data",function(d){
  console.log("i received data - " + d);
});

r.on("end",function(){
  console.log("i have ended");
});
