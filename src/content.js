/*global chrome*/

//alert("Hello from your Chrome extension!");
//import { Inspector} from '../public/inspector.js';
var myExampleClickHandler = function (element) { console.log('Clicked element:', element); }
console.log('content loaded');
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'clicked_browser_action') {
    console.log('Here:::');
    //   var myDomOutline = Inspector({
    //   onClick: myExampleClickHandler,
    //   filter: '*'
    // });
    // myDomOutline.start();
    // myDomOutline.stop();
    //console.log('firstHref',firstHref);
  }
});
