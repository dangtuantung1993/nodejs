var quotes = "Darkness cannot drive out darkness; "+
    "only light can do that. " +
    "Hate cannot drive out hate; " +
    "only love can do that.";
console.log(quotes);

var firstPost = quotes.indexOf("only");//tim tu trai qua phai
var lastPost = quotes.lastIndexOf("only");//tim tu phai qua trai
console.log("firstPost = ",firstPost);
console.log("lastPost = ",lastPost);

var canPost = quotes.search(/ca..ot/);//regular expression tim 1 tu 1 mau ma chung ta can tim
console.log(canPost);

var  contact = "phone 0888666893 Tung";
var phonepost = contact.search(/[0-9]+/);
console.log(phonepost);

var ilove = "I love PHP. PHP file extension is php";
var ilovenode = ilove .replace(/PHP/ig,"Node.js");
console.log(ilovenode);
//i :in casesensitive
//g:greedy

var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
console.log(res);

var res2 = str.slice(-12,-6);
console.log(res2);

console.log(str.substring(7,13));

console.log(str.toLocaleLowerCase());//chuyen doi sang chu thuong
console.log(str.toUpperCase());//chuyen doi sang chu hoa

//chia chuoi thanh mang su dung ki tu phan cach
var fruits = str.split(", ");
console.log(fruits.valueOf());

var love = "LOVE";
for (var i = love.length-1;i>=0;i--)
{
    console.log(love.charAt(i));
}
//dao nguoc chuoi
String.prototype.reverse = function () {
    var result = "";
    for (var i = this.length-1; i>=0;i--){
        result += this.charAt(i);
    }
    return result;
};
console.log(love.reverse());
console.log("Hello".reverse());
console.log(love);
fruits.reverse();
console.log(fruits.valueOf());

var test  ="Apple, Banana, Kiwi";
var  test2 = test.split("-");
console.log(test2);