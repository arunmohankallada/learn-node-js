var book = require("../lib/grades").book;
exports ["setUp"] = function(callback){
  book.reset();
  callback();
}

exports ["Can add new grade"] = function (test){
  book.addGrade(90);
  var count = book.getGradeCount();
  test.equal(count,1);
  test.done();
}

exports ["Can average grade"] = function (test){
  book.addGrade(100);
  book.addGrade(50);
  var avgGrade = book.getAverageGrade();
  test.equal(avgGrade,75);
  test.done();
}
