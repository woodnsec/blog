FROM node:10-alpine

EXPOSE 8000

ARG GATSBY_VERSION=^2.0.0

# Install dev dependencies
RUN set -x \
  && apk add --no-cache \
  g++ \
  git \
  make \
  python2 \
  binutils


# Install gatsby cli and cleanup
RUN set -x \
  && npm install --global gatsby@${GATSBY_VERSION} sharp\
  --no-optional gatsby@${GATSBY_VERSION} \
  && npm cache clean --force

RUN mkdir -p /site
COPY . /site
WORKDIR /site


COPY ./entry.sh /
RUN chmod +x /entry.sh
ENTRYPOINT ["/entry.sh"]