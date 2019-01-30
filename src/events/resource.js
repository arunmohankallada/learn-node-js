var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource (m){

  var maxEvents = m;
  self = this;

  process.nextTick (function (){
    var count=0;
    self.emit('start');
    var t=setInterval( function(){
      self.emit('data',++count);
      if(count==maxEvents){
        self.emit('end');
        clearInterval(t);
      }
    },10);

  });  //nextTick
}; //function begining


util.inherits(Resource, EventEmitter);

module.exports = Resource;
