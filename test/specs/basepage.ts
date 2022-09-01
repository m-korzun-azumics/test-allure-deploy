import allureReporter from '@wdio/allure-reporter'

describe("Base page test", async () => {
  it("Signing in", async () => {
    const el  = await $('.onliner_logo')
  
    allureReporter.addSeverity('Critical')
    await browser.url("https://www.onliner.by/");
    
  });
});
