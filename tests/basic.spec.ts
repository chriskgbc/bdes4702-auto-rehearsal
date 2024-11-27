import { test, expect } from '@playwright/test';

test('home', async ({ page, isMobile }) => {

  await page.goto('https://georgebrown.ca/');
  await page.screenshot({ path: page.viewportSize()?.width+'_home_main_top.png'} );

  await page.goto('https://www.georgebrown.ca/why-george-brown');
  await page.screenshot({ path: page.viewportSize()?.width+'_home_about_top.png'} );

});



test('g418', async ({ page, isMobile }) => {

  test.skip(isMobile === true);

  await page.goto('https://www.georgebrown.ca/programs/web-development-front-end-design-program-postgraduate-g418');

  if (isMobile == true) {
    await page.locator(".mobile-tab-control-hamburger:visible").click();
  }

  await page.screenshot({ path: page.viewportSize()?.width+'_g418_main.png', fullPage: true });

  await page.locator("#tab-courses-2024").click();
  await page.screenshot({ path: page.viewportSize()?.width+'_g418_courses.png', fullPage: true });

  await page.locator("#tab-tuition-2024").click();
  await page.screenshot({ path: page.viewportSize()?.width+'_g418_tuition.png', fullPage: true });

});


test('g401', async ({ page, isMobile }) => {

  test.skip(isMobile === true);

  await page.goto('https://www.georgebrown.ca/programs/design-management-program-postgraduate-g401');

  if (isMobile == true) {
    await page.locator(".mobile-tab-control-hamburger:visible").click();
  }

  await page.screenshot({ path: page.viewportSize()?.width+'_g401_main.png', fullPage: true });

  await page.locator("#tab-courses-2024").click();
  await page.screenshot({ path: page.viewportSize()?.width+'_g401_courses.png', fullPage: true });

  await page.locator("#tab-tuition-2024").click();
  await page.screenshot({ path: page.viewportSize()?.width+'_g401_tuition.png', fullPage: true });

});



