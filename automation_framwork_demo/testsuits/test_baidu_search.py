# -*- coding:UTF-8 -*-
import time
import unittest
from framework.browser_engine import BrowserEngine
from pageobjects.baidu_homepage import Homepage


class Baidusearch(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        browse = BrowserEngine(cls)
        cls.driver = browse.open_browser(cls)

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    # def setUp(self):
    #     """
    #     测试固件的setup()的代码，主要是测试的前提准备工作
    #     :return:
    #     """
    #     browse = BrowserEngine(self)
    #     self.driver = browse.open_browser(self)
    #
    # def tearDown(self):
    #     """
    #     测试结束后的操作，这里基本上都是关闭浏览器
    #     :return:
    #     """
    #     self.driver.quit()

    def test_baidu_search(self):
        """
        这里一定要test开头，把测试逻辑代码封装到一个test开头的方法里
        :return:
        """
        homepage = Homepage(self.driver)
        homepage.type_search('selenium')
        time.sleep(2)
        homepage.send_submit_btn()
        time.sleep(2)
        homepage.get_window_img()
        try:
            assert 'selenium' in homepage.get_page_title()
            print ('test pass')
        except Exception as e:
            print ('test fail',format(e))

    def test_search2(self):
        homepage = Homepage(self.driver)
        homepage.type_search("python")
        homepage.send_submit_btn()
        time.sleep(2)
        homepage.get_window_img()

if __name__ =="__main__":
    unittest.main()