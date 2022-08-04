const { test, expect } = require('@playwright/test');

test('User profile', async ({ page }) => {
  await page.goto('https://propzy.vn/');
  
   // Click text=Ký gửi BĐS 0 >> i >> nth=0
   await page.locator('text=Ký gửi BĐS 0 >> i').first().click();

   // Click [placeholder="email\@example\.com \/ 073023000"]
   await page.locator('[placeholder="email\\@example\\.com \\/ 073023000"]').click();
 
   // Fill [placeholder="email\@example\.com \/ 073023000"]
   await page.locator('[placeholder="email\\@example\\.com \\/ 073023000"]').fill('0918461393');
 
   // Click text=Ghi nhớ tài khoản Quên mật khẩu? Đăng Nhập Tạo tài khoản mới >> [placeholder="Mật khẩu"]
   await page.locator('text=Ghi nhớ tài khoản Quên mật khẩu? Đăng Nhập Tạo tài khoản mới >> [placeholder="Mật khẩu"]').click();
 
   // Fill text=Ghi nhớ tài khoản Quên mật khẩu? Đăng Nhập Tạo tài khoản mới >> [placeholder="Mật khẩu"]
   await page.locator('text=Ghi nhớ tài khoản Quên mật khẩu? Đăng Nhập Tạo tài khoản mới >> [placeholder="Mật khẩu"]').fill('123456');
 
   // Click #form-login >> text=Ghi nhớ tài khoản
   await page.locator('#form-login >> text=Ghi nhớ tài khoản').click();
 
   // Click #login-normal
   await Promise.all([
     page.waitForNavigation(/*{ url: 'https://propzy.vn/' }*/),
     page.locator('#login-normal').click()
   ]);
 
   // Click text=Ký gửi BĐS Tài khoản BĐS ký gửi Bộ sưu tập Bộ tìm kiếm Đổi mật khẩu Cài đặt Đăng >> img
   await page.locator('text=Ký gửi BĐS Tài khoản BĐS ký gửi Bộ sưu tập Bộ tìm kiếm Đổi mật khẩu Cài đặt Đăng >> img').click();
 
   // Click header[role="banner"] >> text=Tài khoản
   await page.locator('header[role="banner"] >> text=Tài khoản').click();
   await expect(page).toHaveURL('https://propzy.vn/tai-khoan');
 
   // Click ul[role="tablist"] >> text=BĐS ký gửi
   await page.locator('ul[role="tablist"] >> text=BĐS ký gửi').click();
   await expect(page).toHaveURL('https://propzy.vn/tin-dang');
 
   // Click ul[role="tablist"] >> text=Bộ sưu tập
   await page.locator('ul[role="tablist"] >> text=Bộ sưu tập').click();
   await expect(page).toHaveURL('https://propzy.vn/bo-suu-tap');
 
   // Click ul[role="tablist"] >> text=Bộ tìm kiếm
   await page.locator('ul[role="tablist"] >> text=Bộ tìm kiếm').click();
   await expect(page).toHaveURL('https://propzy.vn/bo-tim-kiem');
 
   // Click ul[role="tablist"] >> text=Đổi mật khẩu
   await page.locator('ul[role="tablist"] >> text=Đổi mật khẩu').click();
 
   // Click #popup-user-change-pass [aria-label="Close"]
   await page.locator('#popup-user-change-pass [aria-label="Close"]').click();
 
   // Click ul[role="tablist"] >> text=Cài đặt
   await page.locator('ul[role="tablist"] >> text=Cài đặt').click();
   await expect(page).toHaveURL('https://propzy.vn/tai-khoan/thong-bao');
 
   // Click ul[role="tablist"] >> text=Đăng xuất
   await page.locator('ul[role="tablist"] >> text=Đăng xuất').click();
   await expect(page).toHaveURL('https://propzy.vn/');
  
});