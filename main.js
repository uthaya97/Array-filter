
var a=[1,2,3,4,5,6,7,8,9];
document.write("a=[1,2,3,4,5,6,7,8,9]"+"<br>"+"Even number"+"<br>");

var output=a.filter(function(e){
	return e%2==0;
})
document.write(output);