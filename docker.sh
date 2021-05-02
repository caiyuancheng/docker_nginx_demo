###
 # @Descripttion: 
 # @Author: 蔡远程
 # @Date: 2021-05-02 16:42:29
 # @LastEditTime: 2021-05-02 17:30:30
 # @LastEditors: 蔡远程
###

### 动态绑定脚本（注意修改本地目录路径地址）
docker run -p 2000:80 -d --name vue_demo \
--mount type=bind,source=$HOME/Desktop/experiment/docker_demo/nginx.conf,target=/etc/nginx/conf.d/default.conf \
--mount type=bind,source=$HOME/Desktop/experiment/docker_demo/dist,target=/usr/share/nginx/html \
nginx