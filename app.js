function topla(y,z){
    var x = y+z;
    console.log(x)
}

topla(3,5)

//veritiplerini stringe cevirme
value = String();
value = String(3.14);
value = (true);
value = (false);
value = (function(){console.log()});
value = String([1,2,3,4,5,6]);


//veritiplerini sayılara çevirme

value = (10).toString();
value = Number("123");
value = Number(null);     //NaN(not a number demek)
value = Number(undefined);
value = Number("hello world");   


value = Number("3.14");
value = parseFloat("3.14");


value = parseInt("3");


const a= Number("34")+53;

console.log(a);
console.log(typeof a);
console.log(value);
console.log(typeof value);
