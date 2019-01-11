var book = require("./lib/grades").book;

for (var i=3;i<process.argv.length;i++){
  book.addGrade(parseInt(process.argv[i]));
}
console.log("Number of Grade = "+ book.getGradeCount());
console.log("Average Grade = " + book.getAverageGrade());
console.log("LetterGrade = "+ book.getLetterGrade());
