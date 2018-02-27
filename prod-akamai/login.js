const WebPageTest = require('webpagetest');
const wpt = new WebPageTest('www.webpagetest.org','A.7ec2f3e79d0f65f49b96fad3c622d101');

var script = wpt.scriptToString([
	{"setViewportSize": ["1750",  "850"]},
	{"navigate": "workforcenow.adp.com"}
]);
var testSettings = {  
	"connectivity": "Cable",
	"location": "Dulles:Chrome",
	"firstViewOnly": false,
	"pollResults": 5,
	"runs": 1,
	"timeout": 600,
	"reporter": "xunit",
	"notifyEmail": "jiyun.kang@gmail.com",
	"video": true,
	"connectivity": "custom",
	"bandwidthDown": "5000",
	"bandwidthUp": "512",
	"latency": "150",
	"packetLossRate": "5"
}

wpt.runTest(script,testSettings, function processTestRequest(err, result) {console.log(err || result)});
