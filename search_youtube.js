const { waitForDebugger } = require("inspector");

Feature('Search');

Scenario('Search on YouTube', ({ I }) => {
I.amOnPage('https://youtube.com');
I.wait(2);
I.click('Search')
I.fillField('Search','Nhạc bolero');
I.pressKey('Enter');
I.wait(2);
I.clearField('Search');
I.wait(2);
I.fillField('Search','Phim hành động');
I.pressKey('Enter');
I.wait(2);
I.clearField('Search');
I.wait(2);
I.fillField('Search','Tin tức trong ngày');
I.pressKey('Enter');
I.wait(2);
});