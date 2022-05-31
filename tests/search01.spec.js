// @ts-check
const { test, expect } = require('@playwright/test');

test('Search on homepage', async ({ page }) => {
  // Go to https://preprod-big-revamp-v1.k8s.propzy.asia/
  await page.goto('https://preprod-big-revamp-v1.k8s.propzy.asia/');
  // Click div:has-text("Tìm nhà ngay hôm nayGiao dịch an toàn với 100% bất động sản được xác thực bởi Pr") >> nth=3
  await page.locator('div:has-text("Tìm nhà ngay hôm nayGiao dịch an toàn với 100% bất động sản được xác thực bởi Pr")').nth(3).click();
  // Click text=Tìm nhà ngay hôm nayGiao dịch an toàn với 100% bất động sản được xác thực bởi Pr >> [placeholder="Địa chỉ\, đường\, phường\, quận\, thành phố\.\.\."]
  await page.locator('text=Tìm nhà ngay hôm nayGiao dịch an toàn với 100% bất động sản được xác thực bởi Pr >> [placeholder="Địa chỉ\\, đường\\, phường\\, quận\\, thành phố\\.\\.\\."]').click();
  // Fill text=Tìm nhà ngay hôm nayGiao dịch an toàn với 100% bất động sản được xác thực bởi Pr >> [placeholder="Địa chỉ\, đường\, phường\, quận\, thành phố\.\.\."]
  await page.locator('text=Tìm nhà ngay hôm nayGiao dịch an toàn với 100% bất động sản được xác thực bởi Pr >> [placeholder="Địa chỉ\\, đường\\, phường\\, quận\\, thành phố\\.\\.\\."]').fill('quan 5');
  // Click .hightlight >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://preprod-big-revamp-v1.k8s.propzy.asia/mua/bat-dong-san/hcm/quan-5?page=0&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&type=mua&zoom=10' }*/),
    page.locator('.hightlight').first().click()
  ]);
  // Click text=Sắp xếp:Đề xuất phù hợp >> svg
  await page.locator('text=Sắp xếp:Đề xuất phù hợp >> svg').click();
  // Click #react-select-4-listbox >> text=Mới nhất
  await page.locator('#react-select-4-listbox >> text=Mới nhất').click();
  await expect(page).toHaveURL('https://preprod-big-revamp-v1.k8s.propzy.asia/mua/bat-dong-san/hcm/quan-5?page=0&sortBy=date&sortDirection=DESC&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&type=mua&zoom=10');
  // Click text=Select is focused , press Down to open the menu, Mới nhất >> svg
  await page.locator('text=Select is focused , press Down to open the menu, Mới nhất >> svg').click();
  // Click text=Giá tăng dần
  await page.locator('text=Giá tăng dần').click();
  await expect(page).toHaveURL('https://preprod-big-revamp-v1.k8s.propzy.asia/mua/bat-dong-san/hcm/quan-5?page=0&sortBy=price&sortDirection=ASC&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&type=mua&zoom=10');
  // Click text=Select is focused , press Down to open the menu, Giá tăng dần >> svg
  await page.locator('text=Select is focused , press Down to open the menu, Giá tăng dần >> svg').click();
  // Click text=Giá giảm dần
  await page.locator('text=Giá giảm dần').click();
  await expect(page).toHaveURL('https://preprod-big-revamp-v1.k8s.propzy.asia/mua/bat-dong-san/hcm/quan-5?page=0&sortBy=price&sortDirection=DESC&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&type=mua&zoom=10');
  // Click text=Select is focused , press Down to open the menu, Giá giảm dần >> svg
  await page.locator('text=Select is focused , press Down to open the menu, Giá giảm dần >> svg').click();
  // Click text=Diện tích tăng dần
  await page.locator('text=Diện tích tăng dần').click();
  await expect(page).toHaveURL('https://preprod-big-revamp-v1.k8s.propzy.asia/mua/bat-dong-san/hcm/quan-5?page=0&sortBy=size&sortDirection=ASC&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&type=mua&zoom=10');
  // Click text=Select is focused , press Down to open the menu, Diện tích tăng dần >> svg
  await page.locator('text=Select is focused , press Down to open the menu, Diện tích tăng dần >> svg').click();
  // Click text=Diện tích giảm dần
  await page.locator('text=Diện tích giảm dần').click();
  await expect(page).toHaveURL('https://preprod-big-revamp-v1.k8s.propzy.asia/mua/bat-dong-san/hcm/quan-5?page=0&sortBy=size&sortDirection=DESC&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&type=mua&zoom=10');
  // Click .pagination-container > li:nth-child(3)
  await page.locator('.pagination-container > li:nth-child(3)').click();
  await expect(page).toHaveURL('https://preprod-big-revamp-v1.k8s.propzy.asia/mua/bat-dong-san/hcm/quan-5?page=1&sortBy=size&sortDirection=DESC&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&type=mua&zoom=10');
  // Click .styles__Icon-sc-1fjttyf-4 >> nth=0
  await page.locator('.styles__Icon-sc-1fjttyf-4').first().click();
  // Click header >> text=Thuê >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://preprod-big-revamp-v1.k8s.propzy.asia/thue/bat-dong-san/hcm/quan-5?page=0&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&type=thue&zoom=10' }*/),
    page.locator('header >> text=Thuê').first().click()
  ]);
  // Click header >> text=Dự án
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://preprod-big-revamp-v1.k8s.propzy.asia/du-an/hcm/quan-5?listingTypeId=1&page=0&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&type=du-an&zoom=10' }*/),
    page.locator('header >> text=Dự án').click()
  ]);
  // Click text=Hiện bản đồ
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://preprod-big-revamp-v1.k8s.propzy.asia/mua/bat-dong-san/hcm/quan-5?bottomRightLat=10.730947097744767&bottomRightLng=106.69235229492188&page=0&tags=%5B%7B%22tagId%22%3A%22hcm-quan-5%22%2C%22text%22%3A%22Qu%E1%BA%ADn%205%22%2C%22resultType%22%3A%22district_5%22%7D%5D&topLeftLat=10.780528896786468&topLeftLng=106.64402961730958&type=mua&zoom=14' }*/),
    page.locator('text=Hiện bản đồ').click()
  ]);
});
