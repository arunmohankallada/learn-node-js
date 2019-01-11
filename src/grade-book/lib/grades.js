var gradeBook = {
  _grade:[],
  addGrade: function(newGrade){
    this._grade.push(newGrade);
  },
  getGradeCount: function(){
    return this._grade.length;
  },
  getAverageGrade: function(){
    var sum =0;
    for (var i=0;i<this._grade.length;i++){
        sum+=this._grade[i];
    }
    return sum/this._grade.length;
  },
  reset:function(){
    this._grade=[];
  },
  getLetterGrade:function(){
    var avg = this.getAverageGrade();
    if (avg >= 90){
      return "A";
    }
    else {
      return "B";
    }

  }

};

exports.book = gradeBook;
