const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com');

    //await page.pdf({path: 'example.pdf', format:'A4'});
    const title = await page.evaluate(() => document.title);
    console.log(title);

    await browser.close();
}

run();