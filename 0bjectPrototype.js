function Robot(type) {   //-->Constructor function
    this.type = type;
}

var flyRobot = new Robot('fly');
var diveRobot = new Robot('dive');

Robot.prototype.speak = function (text) {
    console.log(this.type + "Robot says '" + text + "'");
};

flyRobot.speak('Hello World'); //sử dụng lại function speak định nghĩa ở Robot.prototype
diveRobot.speak('I swimming');

flyRobot.talk = function() {
    console.log('I am talking');
};
flyRobot.talk();
