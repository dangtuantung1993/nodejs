var cars = ["Seab","Volvo","BMW"];
console.log(cars.valueOf());
var message = "hello world"
console.log(typeof  message);
/*for (var i = 0; i < cars.length;i++)
{
    console.log(cars[i]);

}
console.log(cars.join(" * "));*/
cars.push("Honda");
cars.push("Yamaha");
cars.push("Toyota");
console.log(cars.valueOf());

/*while ( cars.length > 0)
{
    cars.pop();
    console.log(cars.valueOf());
}*/
while (cars.length > 0)
{
    cars.shift();
    console.log(cars.valueOf());
}
cars.push("Thaco");
cars.push("Kia");
cars.push("Mazda");
cars.push("Lexus");
cars.reverse();/* dao nguoc phan tu*/
cars.splice(2, 1);/*xoa 1 phan tu thu i arrya.splice(i,1)*/
console.log(cars.valueOf());