var book = require("./lib/grades").book;
var express = require("/usr/local/lib/node_modules/express");
var app = express();

app.get("/",function(req,res){
  message="<html><b>Hello</b></html>";
  res.send("Hello!!")
});

app.get("/grade",function(req,res){
  var grades = req.query.grades.split(",");
  for (var i=0;i<grades.length;i++){
    book.addGrade(parseInt(grades[i]));
  }

  var message="<!DOCTYPE html>"
  message+="<html><title>arun</title><body><table><h2>Grading System</h2>";
  message+="<table>";
  message+="<tr><th>Count</th><th>Average</th><th>Grade</th></tr>"
  message+="<tr><td>"+book.getGradeCount()+"</td><td>"+book.getAverageGrade()+ "</td><td>" + book.getLetterGrade() + "</td></tr>"
  /*message+="</table>";
  message+="Number of Grade = "+ book.getGradeCount();
  message+="\nAverage Grade = " + book.getAverageGrade();
  message+="\nLetterGrade = "+ book.getLetterGrade();*/
  message+="</table></body></html>"
  res.send(message);
});

app.listen(3000);
console.log("Server is ready");
