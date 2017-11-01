blog
===========
####1、安装ruby, ruby -v 
####2、更换GEM的source镜像
#####1.首先确认一下当前source镜像地址
gem sources -l
服务器为 https://rubygems.org/
*** CURRENT SOURCES ***
 https://rubygems.org/
######2.删除GEM的默认source镜像rubygems.org
gem sources -r https://rubygems.org/
######3.将https://ruby.taobao.org设置为GEM的source镜像
gem sources -a https://ruby.taobao.org
####3、本地运行 >jekyll server 运行本地的服务
 gem install jekyll
 生成静态页面
  jekyll new myblog
  
 启动服务
 $ cd myblog/
 $ jekyll server
 
 访问站点
 http://127.0.0.1:4000/
