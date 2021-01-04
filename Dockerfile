# Dockerfile可以管理镜像，还可以执行一些脚本
# 使用pm2镜像
FROM keymetrics/pm2:latest-alpine
# 在容器中新建目录文件夹 egg
RUN mkdir -p /egg
# 将 /egg 设置为默认工作目录
WORKDIR /egg
# 将 package.json复制到默认工作目录
COPY package.json /egg/package.json
# 设置yarn源，安装生产环境依赖
RUN yarn config set register https://registry.npm.taobao.org
RUN yarn --production
# 再copy代码到容器中/egg目录下（./ 表示所有文件 ）
COPY ./ /egg
# 暴露9000端口
EXPOSE 9000
# 等容器启动之后执行脚本（RUN是立即执行，CMD要等到容器启动之后再执行）
CMD pm2 start prod.servser.js -i 0