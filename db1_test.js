const { waitForDebugger } = require("inspector");


Feature('Request');

Scenario('Search on request list', ({ I }) => {
I.amOnPage('http://10.1.5.246:7000/login');
I.wait(2);
I.clearField('username');
I.fillField('username','csanh');
I.clearField('password');
I.fillField('password','123');
I.pressKey('Enter');
I.wait(2);
I.amOnPage('http://10.1.5.246:7000/request');
I.wait(2);
I.clearField('SDT, Tên, Email, IDs');
I.fillField('SDT, Tên, Email, IDs','0918461393');
I.wait(10);
});