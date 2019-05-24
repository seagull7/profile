var re = /([a-z])/g;
var s = "fort collins, croton-on-hudson, harper's ferry, coeur d'alene, o'fallon"; 
s = s.replace(re, function(x){return x.toUpperCase();});
console.log(s);