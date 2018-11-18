var webpage = require('webpage'),
    page = webpage.create(),
    system  = require('system'),
    webadd = null,
    fileName = '';
if (system.args.length <= 1) {
    console.log('Enter web url');
    phantom.exit();
}
webadd = system.args[1];
fileName = system.args[2];
//This is Iphone simulator
page.settings.userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3";
// This is the code that captures the website
page.open(webadd,function(status){
    if (status === "success") {
        page.render(fileName +'.jpg');
        console.log('iPhone Screen captures is done!');
        phantom.exit();
    }
});