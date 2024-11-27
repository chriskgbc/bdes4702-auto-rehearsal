const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  const targetPage = page;
  const recorder = await page.screencast({path: 'recording.webm'});


  const urls = [
    'https://www.georgebrown.ca/programs/web-development-front-end-design-program-postgraduate-g418',
    'https://www.georgebrown.ca/programs/art-and-design-foundation-program-g108',
    "https://www.georgebrown.ca/programs/concept-art-for-entertainment-program-postgraduate-g407?year=2024",
    "https://chriskkim.com",
  ]

  for (let i = 0; i < urls.length; i++) {

    console.log(urls[i]);

    await targetPage.goto(urls[i], {
      waitUntil: 'networkidle2',
    });


    await targetPage.setViewport({
      width: 1920,
      height: 1080
    })

    await page.screenshot({
      path: i+"_"+i+"_desktop_"+"0.png"
    });
    
    await targetPage.setViewport({
      width: 430,
      height: 932
    })

    await page.screenshot({
      path: i+"_"+i+"_mobile_"+"0.png"
    });


  };

  await recorder.stop();

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
