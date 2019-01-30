var maxTime =1000;

var evenDoubler = function (v,callback){
   var waitTime = Math.floor(Math.random()*(maxTime+1));
   if(v%2){
     setTimeout(function(){
       callback(new Error("Odd Input"));
     },null, waitTime);
   } else{
        setTimeout(function() {
          callback(null,v*2,waitTime);
        })
   }
}

exports.evenDoubler = evenDoubler;

exports.foo = "bar";
