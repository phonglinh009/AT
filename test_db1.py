from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from time import sleep


option = Options()

# Pass the argument 1 to allow and 2 to block
option.add_experimental_option("prefs", { 
    "profile.default_content_setting_values.notifications": 1 
})

try:
    
    user = "vinhle"
    pwd = "123"
    link1 = "http://10.1.5.246:7000/login"
    link2 = "http://10.1.5.246:7000/kpi-setting/kpibsa"
    link3 = "http://10.1.5.246:7000/kpi-setting/kpiba"
    driver = webdriver.Chrome(options=option)
    driver.get(link1)
    driver.maximize_window()
    sleep(2)
    element1 = driver.find_element_by_name("username")
    element1.clear
    element1.send_keys(user)
    element1 = driver.find_element_by_name("password")
    element1.clear
    element1.send_keys(pwd)
    element1.send_keys(Keys.RETURN)
    sleep(2)

    driver.get(link2)
    select = Select(driver.find_element_by_id("date"))
    select.select_by_index(1)
    sleep(5)
    select.select_by_index(0)
    sleep(5)
    select.select_by_index(2)
    sleep(5)
    select.select_by_index(3)
    sleep(5)
    select.select_by_index(4)
    sleep(5)
    select.select_by_index(5)
    sleep(5)

    driver.get(link3)
    select = Select(driver.find_element_by_id("date"))
    select.select_by_index(1)
    sleep(5)
    select.select_by_index(0)
    sleep(5)
    select.select_by_index(2)
    sleep(5)
    select.select_by_index(3)
    sleep(5)
    select.select_by_index(4)
    sleep(5)
    select.select_by_index(5)
    sleep(5)

    driver.quit()

except Exception as e:
    print(e)