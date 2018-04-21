 # -*- coding:UTF-8 -*-
# import unittest
# import testsuits
# from testsuits.test_baidu_search import Baidusearch
# from testsuits.test_get_page_title import GetPageTitle



#addTest方法:加载测试用例到测试套件中
# suite=unittest.TestSuite()
# suite.addTest(Baidusearch('test_baidu_search'))
# suite.addTest(Baidusearch('test_search2'))
# suite.addTest(GetPageTitle('test_get_title'))

#makeSuite方法:一次性加载一个类文件下所有测试用例到suite中去
# suite = unittest.TestSuite(unittest.makeSuite(Baidusearch))

#discover方法：运行一个目录或一个包下的所有的用例，在实际脚本开发过程中，最后都采用这个方法来批量管理和执行几百上千的测试用例
# suite = unittest.TestLoader().discover("testsuits")
#
# if __name__=='__main__':
#     #执行用例
#     runner = unittest.TextTestRunner()
#     runner.run(suite)



import HTMLTestRunner
import os
import time
import unittest


#设置报告文件保存路径
report_path = os.path.dirname(os.path.abspath('.'))+'/test_report/'
#获取系统当前时间
now = time.strftime("%Y-%m-%d-%H_%M_%S",time.localtime(time.time()))

#设置文件名称格式
HtmlFile = report_path+now +"HTMLtemplate.html"
fp = file(HtmlFile,"wb")

#构建suite
suite=unittest.TestLoader().discover("testsuits")#testsuits是可以包名，也可以是一个文件夹名称,执行testsuits下的所有的用例

if __name__ =="__main__":

    #初始化一个HTMLTestRunner实例对象，用来生成报告
    runner = HTMLTestRunner.HTMLTestRunner(stream=fp,title=u"某某项目测试报告",description=u"用例测试情况")
    #开始执行测试套件
    runner.run(suite)