# -*- coding:UTF-8 -*-

import ConfigParser
import os.path
from selenium import webdriver
from framework.logger import Logger

logger = Logger(logger="BrowserEngine").getlog()


class BrowserEngine(object):

    dir = os.path.dirname(os.path.abspath('.'))
    chrome_driver_path = dir + '/tools/chromedriver.exe'
    ie_driver_path = dir + '/tools/IEDriverServer.exe'
    firefox_driver_path = dir + 'tools/geckodriver.exe'

    def __init__(self,driver):
        self.driver = driver

    #read the browser type frome config.ini file,return the driver
    def open_browser(self,driver):
        config = ConfigParser.ConfigParser()
        #file_path = os.path.dirname(os.getcwd())+'config/config.ini'
        file_path = os.path.dirname(os.path.abspath('.'))+'/config/config.ini'
        config.read(file_path)

        browser = config.get("browserType","browserName")
        logger.info("You had select %s browser." %browser)
        url = config.get("testServer","URL")
        logger.info("The test server url is: %s" %url)


        if browser == "Firefox":
            driver = webdriver.Firefox()
            logger.info("starting firefox browser.")
        elif browser == "Chrome":
            driver = webdriver.Chrome()
            logger.info("starting Chrome browser")
        elif browser == "IE":
            driver = webdriver.Ie()
            logger.info("starting IE browser.")

        driver.get(url)
        logger.info("open url:%s" %url)
        driver.maximize_window()
        logger.info("Maximize the current window")
        driver.implicitly_wait(10)
        logger.info("Set implicitly wait 10 seconds.")
        return driver

    def quit_browser(self):
        logger.info("Now,Close and quit the browser.")
        self.driver.quit()