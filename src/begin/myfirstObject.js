
var myFirstObject = {
size:4,
value:'arun',
print: function(){
  console.log("Size = "+ this.size + ", Value = " + this.value);
}
};

/*console.log(myFirstObject);
console.log(myFirstObject.size)
console.log(myFirstObject.value)
myFirstObject.print();*/

exports.myFirstObject = myFirstObject;
