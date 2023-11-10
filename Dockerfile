FROM node:16.19.1-slim as base

LABEL "com.github.actions.name"="Vuepress deploy"
LABEL "com.github.actions.description"="A GitHub Action to build and deploy Vuepress sites to GitHub Pages"
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="gray-dark"

LABEL "repository"="https://github.com/zzy-web/zViewDocs"
LABEL "homepage"="https://github.com/zzy-web/zViewDocs"
LABEL "maintainer"="2584007592@qq.com"

RUN apt-get update && apt-get install -y git jq

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]