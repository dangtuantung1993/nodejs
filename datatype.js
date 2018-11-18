"use strict";
var age =10;
const pi = 3.1458;
console.log(typeof  pi);
if(parseInt(age)){
    console.log("Age is number");
}
var myage = "aaa";
var myage2 = parseInt(myage);
//Boolean
var  nodejs_slow = false;
var iojs_fast = true;

if(nodejs_slow){
    console.log("Node.js is slow");

}else {
    console.log("Node.js is fast");
}

if(!nodejs_slow){
    console.log("Node.js is not slow");

}

if(!nodejs_slow && iojs_fast){
    console.log("Both Node.js and iojs are fast");
}

//String
var best_film = "Gone with the wind";
var best_hero = 'Bat man';
var best_player = `B'jorka`;//them ' vao string
console.log(best_player);
var my_folder = "/Volumes/Macbackup/Data/";
console.log(my_folder);

//Object
var  cuong =  {firstname: "Tran", lastname: "Cuong" };
var  book = {name: "Java Cookbook", author : cuong};//khai bao ham vao doi tuong
console.log(book.name);
console.log(book.price);
book.price = 100; // gan them ham vao object
console.log(book.price);
cuong.firstname = "Hoang";
console.log(book.author);
console.log(cuong['firstname']);
console.log(cuong["firstname"]);
