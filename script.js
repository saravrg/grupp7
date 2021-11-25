var nav = ["News", "About us", "Press", "Careers", "Contact"];
console.log( nav[0] );
console.log( nav[1] );
console.log( nav[2] );
console.log( nav[3] );
console.log( nav[4] );
console.log(nav.length);

var arrayLength = nav.length;
var myList = "<ul>";
for (var i = 0; i < arrayLength; i++) { myList += "<li>" + nav[i] + "</li>"; } myList += "</ul>";
document.getElementById("myTopnav").innerHTML = myList;
