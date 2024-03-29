const { waitForDebugger } = require("inspector");

Feature('SignIn');

Scenario('SignIn Github', ({ I }) => {
    I.amOnPage('https://github.com');
    I.click('Sign in', '//html/body/div[1]/header');
    I.see('Sign in to GitHub', 'h1');
    I.fillField('Username or email address', 'something@gmail.com');
    I.fillField('Password', '123456');
    I.click('Sign in');
    I.see('Incorrect username or password.', '.flash-error');
});