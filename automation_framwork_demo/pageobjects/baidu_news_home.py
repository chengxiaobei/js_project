# -*- coding:UTF-8 -*-
from framework.base_page import BasePage


class NewsHomePage(BasePage):
    # 点击体育新闻入口
    sport_link = "xpath=>//*[@id='channel-all']/div/ul/li[8]/a"

    def click_sports(self):
        self.click(self.sport_link)
        self.sleep(2)

