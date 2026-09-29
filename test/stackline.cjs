const assert=require('node:assert/strict'),path=require('node:path');
const root=process.env.STACKLINE_TEST_PACKAGE || path.resolve(__dirname,'..');
const plugin=require(root);
assert(plugin['launcher:ChromeHeadless']);
const {Server}=require('karma');
process.env.CHROME_BIN ||= '/usr/bin/google-chrome';
const config={configFile:false,basePath:process.cwd(),frameworks:['mocha'],files:['test/stackline.browser.js'],plugins:[plugin,require('karma-mocha')],singleRun:true,autoWatch:false,port:0,colors:false,reporters:['dots'],browsers:['StacklineHeadless'],customLaunchers:{StacklineHeadless:{base:'ChromeHeadless',flags:['--no-sandbox','--disable-dev-shm-usage']}},captureTimeout:45000,browserNoActivityTimeout:30000};
const timer=setTimeout(()=>{console.error('Browser launch timed out');process.exit(1);},70000);
new Server(config,code=>{clearTimeout(timer);assert.equal(code,0,'real browser must capture and pass');console.log('Installed launcher completed real ChromeHeadless suite');}).start();
