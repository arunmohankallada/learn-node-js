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

var handleResults = function(err,results, time){
  if(err){
    console.log("ERROR:" +err.message);
  } else {
    console.log("The results are: "+results + " ( " + time + " )");
  }
};

evenDoubler(2,handleResults);

evenDoubler(5, function(err,results, time){
  if(err){
    console.log("ERROR:" +err.message);
  } else {
    console.log("The results are: "+results + " ( " + time + " )");
  }
});
evenDoubler(10,handleResults);

console.log("-------------")
