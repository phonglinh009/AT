const { waitForDebugger } = require("inspector");


Feature('Request');

Scenario('Search on request list', ({ I }) => {
I.amOnPage('http://preprod-dashboard-web-v1.k8s.propzy.asia/login');
I.wait(2);
I.clearField('username');
I.fillField('username','csanh');
I.clearField('password');
I.fillField('password','123');
I.pressKey('Enter');
I.wait(2);
I.amOnPage('http://preprod-dashboard-web-v1.k8s.propzy.asia/request');
I.wait(5);
I.clearField('SDT, Tên, Email, IDs');
I.fillField('SDT, Tên, Email, IDs','0918461393');
I.wait(15);
});