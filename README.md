# 使用教程

**1、分别执行应用和服务脚本**
## vue应用脚本
```shell
npm install
npm build

#创建名字为vue_image的镜像
docker build -t vue_image .
#根据vue_image镜像创建容器，映射端口号为2000
docker run -p 2000:80 -d --name vue_demo vue_image
```

## serve应用脚本
```shell
#进入serve_demo目录
cd serve_demo
#创建名字为serve_image的镜像
docker build -t serve_image .
#根据serve_image镜像创建容器，映射端口号为2001
docker run -p 2001:2001 -d --name serve_demo serve_image
```

**2、打开 [http://localhost:2000](http://localhost:2000) 即可体验demo**
