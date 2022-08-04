const { setEngine } = require("crypto");
const { waitForDebugger } = require("inspector");

Feature('Homepage');

Scenario('Homepage', ({ I }) => {
I.amOnPage('https://propzy.vn');
I.wait(2);
I.see('Kết nối mọi nhu cầu về bất động sản', 'h1');
I.wait(2);
I.scrollPageToBottom();
I.see('Tìm nhà đất theo khu vực', 'h2');
I.wait(2);
I.scrollPageToTop();
I.wait(2);
});